const express = require('express');

const router = express.Router();

const auth = require('../middlewares/auth');
const blogPostBodyValidation = require('../middlewares/blogPostBodyValidation');

const blogPostsController = require('../controllers/blogPosts.controller');

router.post('/', auth, blogPostBodyValidation, blogPostsController.create);

module.exports = router;
