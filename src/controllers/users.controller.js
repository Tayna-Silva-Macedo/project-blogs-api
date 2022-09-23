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

module.exports = {
  login,
};
