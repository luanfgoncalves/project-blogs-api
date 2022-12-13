const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const jwtConfig = {
  algorithm: 'HS256',
  expiresIn: '15min', // tempo limite
};

// gera o token com base nas configs
const genToken = (email) => {
  const payload = { email };
  // console.log(email);
  const token = jwt.sign(payload, secret, jwtConfig);
  return token;
};

// Recebe o token e faz a verificação de validade do token
const authToken = (token) => {
  try {
      const validateToken = jwt.verify(token, secret);
      return validateToken;
  } catch (err) {
      return false;
  }
};

module.exports = {
  genToken,
  authToken,
};
