const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const config = {
  algorithm: 'HS256',
  expiresIn: '15min', // tempo limite
};

// gera o token com base nas configs
const genToken = (email) => {
  const payload = { email };
  // console.log(email);
  const token = jwt.sign(payload, secret, config);
  return token;
};

// Recebe o token e faz a verificação de validade do token
const authToken = (token) => {
  try {
      const tokenValidation = jwt.verify(token, secret);
      return tokenValidation;
  } catch (err) {
      return false;
  }
};

module.exports = {
  genToken,
  authToken,
};
