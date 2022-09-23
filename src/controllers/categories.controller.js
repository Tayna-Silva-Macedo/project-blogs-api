const categoriesService = require('../services/categories.service');

const create = async (req, res) => {
  const { name } = req.body;

  const newCategory = await categoriesService.create(name);

  return res.status(201).json(newCategory);
};

const getAll = async (_req, res) => {
  const categories = await categoriesService.getAll();

  return res.status(200).json(categories);
};

module.exports = {
  create,
  getAll,
};
