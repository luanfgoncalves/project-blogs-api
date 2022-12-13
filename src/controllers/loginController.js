const loginService = require('../services/loginService');

const loginValidation = async (req, res, next) => {
  try {
      const auth = await loginService.authToken(req.body);
      if (auth.type === 'USER_NOT_FOUND') {
 return res
      .status(400) // bad request
      .json({ message: 'Invalid fields' }); 
}

      req.user = auth;

      return res.status(200).json({ token: auth });
  } catch (err) {
      next(err);
  }
};

module.exports = {
  loginValidation,
};