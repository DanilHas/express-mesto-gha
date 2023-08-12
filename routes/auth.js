const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const { createUser, login } = require('../controllers/auth');

router.post(
  '/signin',
  celebrate({
    body: Joi.object().keys({
      email: Joi.string().required(),
      password: Joi.string().required(),
    }),
  }),
  login,
);

router.post(
  '/signup',
  celebrate({
    body: Joi.object().keys({
      name: Joi.string().min(2).max(30).default('Жак-Ив Кусто'),
      about: Joi.string().min(2).max(30).default('Исследователь'),
      avatar: Joi.string().default(
        'https://pictures.s3.yandex.net/resources/jacques-cousteau_1604399756.png',
      ),
      email: Joi.string().required(),
      password: Joi.string().required(),
    }),
  }),
  createUser,
);

module.exports = router;