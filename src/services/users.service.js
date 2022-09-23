const tokenHelper = require('../helpers/token');
const { User } = require('../models');

const login = async (email, password) => {
  const [user] = await User.findAll({
    where: { email, password },
    attributes: { exclude: ['password'] },
    raw: true,
  });

  if (!user) {
    return {
      error: {
        message: 'Invalid fields',
        type: 'invalidCredentials',
      },
    };
  }

  const payload = user;

  const token = tokenHelper.create(payload);

  return { token };
};

const getByEmail = async (email) => {
  const user = await User.findAll({
    where: { email },
  });

  return user;
};

const create = async ({ displayName, email, password, image }) => {
  const [user] = await getByEmail(email);

  if (user) {
    return {
      error: {
        message: 'User already registered',
        type: 'alreadyExists',
      },
    };
  }

  await User.create({ displayName, email, password, image });

  const payload = {
    displayName,
    email,
    image,
  };

  const token = tokenHelper.create(payload);

  return { token };
};

const getAll = async () => {
  const users = await User.findAll({
    attributes: {
      exclude: ['password'],
    },
  });

  return users;
};

module.exports = {
  login,
  create,
  getAll,
};
