const { Category } = require('../models');

const create = async (name) => {
  const newCategory = await Category.create({ name });

  return newCategory.dataValues;
};

const getAll = async () => {
  const categories = await Category.findAll();

  return categories;
};

const findAndCountAll = async (categoryIds) => {
  const { count } = await Category.findAndCountAll({
    where: { id: categoryIds },
  });

  if (count !== categoryIds.length) {
    return {
      error: {
        message: '"categoryIds" not found',
        type: 'notFound',
      },
    };
  }

  return { count };
};

module.exports = {
  create,
  getAll,
  findAndCountAll,
};
