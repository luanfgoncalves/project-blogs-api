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

//  Req 6 - Busca o user pela chave primária
const getUserById = async (id) => {
    // findOne
    const user = await User.findByPk(id, {
      attributes: { exclude: ['password'] }, 
    });
    // console.log(user);
    if (user === null) {
        return { type: 'USER_NOT_FOUND' };
    }

    return user;
  };

module.exports = {
  createNewUser,
  getAllUsers,
  getUserById,
};
