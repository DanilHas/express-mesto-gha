const router = require('express').Router();
const {
  getUsers,
  getCurrentUser,
  createUser,
  updateProfile,
  updateAvatar,
} = require('../controllers/users');

router.get('/', getUsers);

router.post('/', createUser);

router.patch('/me', updateProfile);

router.patch('/me/avatar', updateAvatar);

router.get('/:userId', getCurrentUser);

module.exports = router;
