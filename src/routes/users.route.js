const express = require('express');

const router = express.Router();

const userBodyValidation = require('../middlewares/userBodyValidation');
const auth = require('../middlewares/auth');

const usersController = require('../controllers/users.controller');

router.post(
  '/',
  userBodyValidation.postUserBodyValidation,
  usersController.create,
);

router.get('/', auth, usersController.getAll);
router.get('/:id', auth, usersController.getById);

module.exports = router;
