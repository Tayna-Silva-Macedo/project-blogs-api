const express = require('express');

const router = express.Router();

const auth = require('../middlewares/auth');
const blogPostBodyValidation = require('../middlewares/blogPostBodyValidation');

const blogPostsController = require('../controllers/blogPosts.controller');

router.post('/', auth, blogPostBodyValidation, blogPostsController.create);

router.get('/', auth, blogPostsController.getAll);
router.get('/:id', auth, blogPostsController.getById);

module.exports = router;
