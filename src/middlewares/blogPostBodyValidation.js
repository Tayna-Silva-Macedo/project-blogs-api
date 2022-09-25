const joiHelper = require('../helpers/joi');

const postBlogPostBodyValidation = (req, res, next) => {
  const { title, content, categoryIds } = req.body;

  const { error } = joiHelper.postBlogPostsSchema.validate({
    title,
    content,
    categoryIds,
  });

  if (error) return next(error);

  return next();
};

const putBlogPostBodyValidation = (req, res, next) => {
  const { title, content } = req.body;

  const { error } = joiHelper.putBlogPostsSchema.validate({ title, content });

  if (error) return next(error);

  return next();
};

module.exports = {
  postBlogPostBodyValidation,
  putBlogPostBodyValidation,
};
