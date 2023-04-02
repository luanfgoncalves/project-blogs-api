const express = require('express');
const blogPostController = require('../controllers/blogPostController');
const { tokenValidation } = require('../middlewares/tokenValidation');

const blogPostRouter = express.Router();

// blogPostRouter.post('/', tokenValidation, blogblogPostController.addNewPost); req 12
blogPostRouter.get('/', tokenValidation, blogPostController.getAllPosts);
blogPostRouter.get('/:id', tokenValidation, blogPostController.getOnePost);

module.exports = blogPostRouter;
