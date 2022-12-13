const express = require('express');
const blogPostController = require('../controllers/blogPostController');
const { tokenValidation } = require('../middlewares/tokenValidation');

const blogPostRouter = express.Router();

// blogPostRouter.post('/', tokenValidation, blogblogPostController.addNewPost);
blogPostRouter.get('/', tokenValidation, blogPostController.getAllPosts);
// postRouter.get('/:id', tokenValidation, blogPostController.getPostById);

module.exports = blogPostRouter;
