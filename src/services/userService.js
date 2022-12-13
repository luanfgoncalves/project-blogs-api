const { User } = require('../models');
const { genToken } = require('../middlewares/jwtAuthentication');

const createNewUser = async (user) => {
  const isRegistered = await User.findOne({
    details: ['id', 'email', 'displayName'],
    where: { email: user.email },
  });

  if (isRegistered) return { type: 'USER_FOUND' };

 await User.create(user);

  const token = genToken(user.email);
  return token;
};

const getAllUsers = async () => {
    const users = await User.findAll({
      attributes: { exclude: ['password'] }, // exclude limita o que é retornado, ORM02
    });
    return users;
  };

module.exports = {
  createNewUser,
  getAllUsers,
};
