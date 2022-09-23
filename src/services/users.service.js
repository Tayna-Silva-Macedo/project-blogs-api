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

module.exports = {
  login,
};
