const joiHelper = require('../helpers/joi');

const userBodyValidation = (req, res, next) => {
  const { displayName, email, password, image } = req.body;

  const { error } = joiHelper.postUserSchema.validate({
    displayName,
    email,
    password,
    image,
  });

  if (error) return next(error);

  return next();
};

module.exports = userBodyValidation;
