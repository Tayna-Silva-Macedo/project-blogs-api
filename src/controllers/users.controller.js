const usersService = require('../services/users.service');

const login = async (req, res) => {
  const { email, password } = req.body;
  const token = await usersService.login(email, password);
  return res.status(200).json({ token });
};

const create = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const token = await usersService.create({
    displayName,
    email,
    password,
    image,
  });
  return res.status(201).json(token);
};

const getAll = async (_req, res) => {
  const users = await usersService.getAll();
  return res.status(200).json(users);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const user = await usersService.getById(id);
  return res.status(200).json(user);
};

const destroy = async (req, res) => {
  const { id: userId } = req.user;
  await usersService.destroy(userId);
  return res.status(204).end();
};

module.exports = {
  login,
  create,
  getAll,
  getById,
  destroy,
};
