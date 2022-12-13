// Req 4
const express = require('express');
const userController = require('../controllers/userController');
const { userValidation } = require('../middlewares/userValidation');

const userRouter = express.Router();

userRouter.post('/', userValidation, userController.createNewUser);

module.exports = userRouter;
