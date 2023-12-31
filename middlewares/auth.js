const jwt = require('jsonwebtoken');
const UnauthorizedError = require('../errors/unauthorized-err');

const { JWT_KEY = 'SECRET_KEY' } = process.env;

const auth = (req, res, next) => {
  const token = req.cookies.jwt;

  if (!token) {
    next(new UnauthorizedError('Необходимо авторизоваться'));
  }

  let payload;

  try {
    payload = jwt.verify(token, JWT_KEY);
  } catch {
    next(new UnauthorizedError('Необходимо авторизоваться'));
  }

  req.user = payload;

  next();
};

module.exports = auth;
