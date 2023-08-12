const router = require('express').Router();
const { errors } = require('celebrate');
const usersRouter = require('./users');
const cardsRouter = require('./cards');
const authRouter = require('./auth');
const auth = require('../middlewares/auth');
const errorHandler = require('../middlewares/error-handler');

router.use('/', authRouter);

router.use(auth);
router.use('/users', usersRouter);
router.use('/cards', cardsRouter);

router.use('*', (req, res) =>
  res.status(404).send({ message: 'Такой страницы не существует' }),
);

router.use(errors());

router.use(errorHandler);

module.exports = router;
