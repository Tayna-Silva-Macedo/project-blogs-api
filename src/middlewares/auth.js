const tokenHelper = require('../helpers/token');

const auth = (req, _res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    const err = new Error('Token not found');
    err.statusCode = 401;
    return next(err);
  }

  try {
    const payload = tokenHelper.verify(authorization);

    req.user = payload;
    
    next();
  } catch (error) {
    const err = new Error('Expired or invalid token');
    err.statusCode = 401;
    next(err);
  }
};

module.exports = auth;
