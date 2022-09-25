const { BlogPost, PostCategory, sequelize } = require('../models');

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

module.exports = {
  create,
};
