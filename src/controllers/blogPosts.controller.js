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
    return next(e);
  }
};

const getAll = async (req, res) => {
  const blogPosts = await blogPostsService.getAll();

  return res.status(200).json(blogPosts);
};

const getById = async (req, res, next) => {
  const { id } = req.params;

  const { error, blogPost } = await blogPostsService.getById(id);

  if (error) {
    const err = new Error(error.message);
    err.statusCode = 404;
    return next(err);
  }

  return res.status(200).json(blogPost);
};

const update = async (req, res, next) => {
  const { title, content } = req.body;
  const { id } = req.params;
  const { id: userId } = req.user;

  const { error, blogPostUpdated } = await blogPostsService.update(title, content, id, userId);

  if (error && error.type === 'unauthorized') {
    const err = new Error(error.message);
    err.statusCode = 401;
    return next(err);
  }

  return res.status(200).json(blogPostUpdated);
};

const destroy = async (req, res, next) => {
  const { id } = req.params;
  const { id: userId } = req.user;

  const { error } = await blogPostsService.destroy(id, userId);

  if (error && error.type === 'notFound') {
    const err = new Error(error.message);
    err.statusCode = 404;
    return next(err);
  }

  if (error && error.type === 'unauthorized') {
    const err = new Error(error.message);
    err.statusCode = 401;
    return next(err);
  }

  return res.status(204).end();
};

module.exports = {
  create,
  getAll,
  getById,
  update,
  destroy,
};
