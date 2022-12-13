const { User } = require('../models');
const { genToken } = require('../middlewares/jwtAuthentication');

const createNewUser = async (user) => {
  const userExist = await User.findOne({
    details: ['id', 'email', 'displayName'],
    where: { email: user.email },
  });

  if (userExist) return { type: 'USER_FOUND' };

 await User.create(user);

  const token = genToken(user.email);
  return token;
};

module.exports = {
  createNewUser,
};
