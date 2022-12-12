// Requisito 7

module.exports = (sequelize, DataTypes) => {
    const Category = sequelize.define('Category', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoincrement: true,
      },
      name: DataTypes.STRING,
    }, 
    {
      timestamps: false,
      tableName: 'categories',
      underscored: true,
    });
  
    return Category;
  };
