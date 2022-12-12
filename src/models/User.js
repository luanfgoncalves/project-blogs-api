//  Requsito 2

const UserModel = (sequelize, DataTypes) => {
    const user = sequelize.define('User', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      displayName:{
        type: DataTypes.STRING
      },
      email: {
        type: DataTypes.STRING
      },
      password: {
        type: DataTypes.STRING
      },
      image: {
        type: DataTypes.STRING
      }, 
    }, {
        timestamps:false,
        underscored:true,
    });

    user.associate = (models) => {
      user.hasMany(models.BlogPost, {
        foreignKey: 'userId', as: 'posts'
      })
    }

    return user;
  };
  
  module.exports = UserModel;
