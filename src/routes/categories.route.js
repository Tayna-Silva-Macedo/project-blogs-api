const express = require('express');

const router = express.Router();

const categoryBodyValidation = require('../middlewares/categoryBodyValidation');
const auth = require('../middlewares/auth');

const categoriesController = require('../controllers/categories.controller');

router.post('/', auth, categoryBodyValidation, categoriesController.create);

router.get('/', auth, categoriesController.getAll);

module.exports = router;
