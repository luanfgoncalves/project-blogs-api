const { User } = require('../models');
const { genToken } = require('../middlewares/jwtAuthentication');

const authToken = async ({ email, password }) => {
  // busca o user requerido
  const user = await User.findOne({
    details: ['id', 'email', 'displayName'],
    where: { email, password },
  });

  if (!user) return { type: 'USER_NOT_FOUND' }; // msg se não houver o user

  const token = genToken(user.dataValues);
  return token;
};

module.exports = {
  authToken,
};
