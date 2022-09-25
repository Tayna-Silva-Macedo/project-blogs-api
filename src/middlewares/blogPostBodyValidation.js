const joiHelper = require('../helpers/joi');

const blogPostBodyValidation = (req, res, next) => {
  const { title, content, categoryIds } = req.body;

  const { error } = joiHelper.postBlogPostsSchema.validate({
    title,
    content,
    categoryIds,
  });

  if (error) return next(error);

  return next();
};

module.exports = blogPostBodyValidation;
