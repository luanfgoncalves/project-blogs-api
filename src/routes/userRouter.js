// Req 4
const express = require('express');
const userController = require('../controllers/userController');
const { userValidation } = require('../middlewares/userValidation');
// req 5
const { tokenValidation } = require('../middlewares/tokenValidation');

const userRouter = express.Router();

userRouter.post('/', userValidation, userController.createNewUser);
// REQ 5
userRouter.get('/', tokenValidation, userController.getAllUsers);

module.exports = userRouter;
