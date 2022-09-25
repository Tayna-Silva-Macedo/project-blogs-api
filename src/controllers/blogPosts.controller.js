const blogPostsService = require('../services/blogPosts.service');
const categoriesService = require('../services/categories.service');

const create = async (req, res, next) => {
  const { title, content, categoryIds } = req.body;
  const { id: userId } = req.user;

  const { error } = await categoriesService.findAndCountAll(categoryIds);

  if (error && error.type === 'notFound') {
    const err = new Error(error.message);
    err.statusCode = 400;
    return next(err);
  }

  try {
    const newPost = await blogPostsService.create(title, content, userId, categoryIds);

    return res.status(201).json(newPost);
  } catch (e) {
    next(e);
  }
};

module.exports = {
  create,
};
