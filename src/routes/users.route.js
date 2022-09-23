const express = require('express');

const router = express.Router();

const userBodyValidation = require('../middlewares/userBodyValidation');
const usersController = require('../controllers/users.controller');

router.post('/', userBodyValidation, usersController.create);

module.exports = router;
