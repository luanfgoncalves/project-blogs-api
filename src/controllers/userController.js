const userService = require('../services/userService');

const createNewUser = async (req, res, next) => {
  try {
      const auth = await userService.createNewUser(req.body);
      if (auth.type === 'USER_FOUND') {
 return res
      .status(409) // conflito (pq o user ja está registrado)
      .json({ message: 'User already registered' }); 
}
      return res.status(201).json({ token: auth });
  } catch (err) {
      next(err);
  }
};

// REQ 5 - get all cppt
const getAllUsers = async (_req, res) => {
    const users = await userService.getAllUsers();
    return res.status(200).json(users);
  };

// Req 6 - COnsulta de user por id cppt
const getUserById = async (req, res, next) => {
    const MSG = 'User does not exist';
    try {
      const { id } = req.params; 
      const user = await userService.getUserById(id);
  
      if (user.type === 'USER_NOT_FOUND') {
        return res.status(404).json({ message: MSG });
      }

      return res.status(200).json(user);
    } catch (err) {
      next(err);
    }
  };
  
module.exports = {
  createNewUser,
  getAllUsers,
  getUserById,
};
