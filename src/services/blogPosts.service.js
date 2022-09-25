const {
  BlogPost,
  PostCategory,
  User,
  Category,
  sequelize,
} = require('../models');

const create = async (title, content, userId, categoryIds) => {
  const result = await sequelize.transaction(async (t) => {
    const newPost = await BlogPost.create(
      { title, content, userId },
      { transaction: t },
    );

    const postCategories = categoryIds.map((id) => ({
      postId: newPost.id,
      categoryId: id,
    }));

    await PostCategory.bulkCreate(postCategories, { transaction: t });

    return newPost.dataValues;
  });

  return result;
};

const getAll = async () => {
  const blogPosts = await BlogPost.findAll({
    include: [
      {
        model: User,
        as: 'user',
        attributes: {
          exclude: ['password'],
        },
      },
      {
        model: Category,
        as: 'categories',
        through: { attributes: [] },
      },
    ],
  });

  return blogPosts;
};

const getById = async (id) => {
  const blogPost = await BlogPost.findByPk(id, {
    include: [
      {
        model: User,
        as: 'user',
        attributes: { exclude: ['password'] },
      },
      {
        model: Category,
        as: 'categories',
        through: { attributes: [] },
      },
    ],
  });

  if (!blogPost) {
    return { error: { message: 'Post does not exist', type: 'notFound' } };
  }

  return { blogPost };
};

const update = async (title, content, id, userId) => {
  const [updated] = await BlogPost.update(
    { title, content },
    { where: { id, userId } },
  );

  if (!updated) {
    return {
      error: {
        message: 'Unauthorized user',
        type: 'unauthorized',
      },
    };
  }

  const { blogPost } = await getById(id);

  return { blogPostUpdated: blogPost };
};

module.exports = {
  create,
  getAll,
  getById,
  update,
};
