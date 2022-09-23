const express = require('express');

const router = express.Router();

const loginBodyValidation = require('../middlewares/loginBodyValidation');
const usersController = require('../controllers/users.controller');

router.post('/', loginBodyValidation, usersController.login);

module.exports = router;
