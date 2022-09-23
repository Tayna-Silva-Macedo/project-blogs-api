const usersService = require('../services/users.service');

const login = async (req, res, next) => {
  const { email, password } = req.body;

  const { error, token } = await usersService.login(email, password);

  if (error && error.type === 'invalidCredentials') {
    const err = new Error(error.message);
    err.statusCode = 400;
    return next(err);
  }

  return res.status(200).json({ token });
};

const create = async (req, res, next) => {
  const { displayName, email, password, image } = req.body;

  const { error, token } = await usersService.create({
    displayName,
    email,
    password,
    image,
  });

  if (error && error.type === 'alreadyExists') {
    const err = new Error(error.message);
    err.statusCode = 409;
    return next(err);
  }

  return res.status(201).json({ token });
};

const getAll = async (_req, res) => {
  const users = await usersService.getAll();

  return res.status(200).json(users);
};

const getById = async (req, res, next) => {
  const { id } = req.params;

  const { error, user } = await usersService.getById(id);

  if (error && error.type === 'notFound') {
    const err = new Error(error.message);
    err.statusCode = 404;
    return next(err);
  }

  return res.status(200).json(user);
};

module.exports = {
  login,
  create,
  getAll,
  getById,
};
