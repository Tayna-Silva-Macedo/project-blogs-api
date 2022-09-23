const joiHelper = require('../helpers/joi');

const loginBodyValidation = (req, res, next) => {
  const { email, password } = req.body;

  const { error } = joiHelper.loginSchema.validate({ email, password });

  if (error) return next(error);

  return next();
};

module.exports = loginBodyValidation;
