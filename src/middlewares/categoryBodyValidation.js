const joiHelper = require('../helpers/joi');

const categoryBodyValidation = (req, res, next) => {
  const { name } = req.body;

  const { error } = joiHelper.postCategorySchema.validate({ name });

  if (error) return next(error);

  return next();
};

module.exports = categoryBodyValidation;
