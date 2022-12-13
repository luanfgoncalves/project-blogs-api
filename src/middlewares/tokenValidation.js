const { authToken } = require('./jwtAuthentication');

const tokenValidation = (req, res, next) => {
  const token = req.headers.authorization;

  if (token === undefined || token === '') {
 return res
    .status(401)
    .json({ message: 'Token not found' }); 
}

  const isLegit = authToken(token);
  if (!isLegit) return res.status(401).json({ message: 'Expired or invalid token' });

  return next();
};

module.exports = {
  tokenValidation,
};