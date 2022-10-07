const express = require('express');

const router = express.Router();

const { postUserBodyValidation } = require('../middlewares/userBodyValidation');
const auth = require('../middlewares/auth');

const usersController = require('../controllers/users.controller');

router.post(
	'/',
	postUserBodyValidation,
	usersController.create,
);

router.get('/', auth, usersController.getAll);
router.get('/:id', auth, usersController.getById);

router.delete('/me', auth, usersController.destroy);

module.exports = router;
