const Joi = require('joi');

const REQUIRED_FIELD = 'Some required fields are missing';

const loginSchema = Joi.object({
  email: Joi.string().email().required().messages({
    'any.required': REQUIRED_FIELD,
    'string.empty': REQUIRED_FIELD,
  }),
  password: Joi.string().required().messages({
    'any.required': REQUIRED_FIELD,
    'string.empty': REQUIRED_FIELD,
  }),
});

const postUserSchema = Joi.object({
  displayName: Joi.string().min(8).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  image: Joi.string(),
});

const postCategorySchema = Joi.object({
  name: Joi.string().required(),
});

const postBlogPostsSchema = Joi.object({
  title: Joi.string().required().messages({
    'any.required': REQUIRED_FIELD,
    'string.empty': REQUIRED_FIELD,
  }),
  content: Joi.string().required().messages({
    'any.required': REQUIRED_FIELD,
    'string.empty': REQUIRED_FIELD,
  }),
  categoryIds: Joi.array().min(1).required().messages({
    'any.required': REQUIRED_FIELD,
    'array.empty': REQUIRED_FIELD,
  }),
});

module.exports = {
  loginSchema,
  postUserSchema,
  postCategorySchema,
  postBlogPostsSchema,
};
