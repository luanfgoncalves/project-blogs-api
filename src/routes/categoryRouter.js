// Req 8, 9 , 10
const express = require('express');

const categoryController = require('../controllers/categoryController');
const { tokenValidation } = require('../middlewares/tokenValidation');

const categoryRouter = express.Router();

categoryRouter.get('/', tokenValidation, categoryController.getCategories);
categoryRouter.post('/', tokenValidation, categoryController.addNewCategory);

module.exports = categoryRouter;
