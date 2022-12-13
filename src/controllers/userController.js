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

module.exports = {
  createNewUser,
};
