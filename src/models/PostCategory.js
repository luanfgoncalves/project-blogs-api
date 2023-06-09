// Requisito 11
module.exports = (sequelize, DataTypes) => {
    const PostCategory = sequelize.define('PostCategory', {
      postId: {
        // allowNull: false,
        type: DataTypes.INTEGER,
        foreignKey: true,
      },
      categoryId: {
        // allowNull: false,
        type: DataTypes.INTEGER,
        foreignKey: true,
    },
  },
    {
      timestamps: false,
      tableName: 'posts_categories',
      underscored: true,
    });

    PostCategory.associate = (models) => {
      models.BlogPost.belongsToMany(models.Category, {
        as: 'categories',
        through: PostCategory,
        foreignKey: 'postId',
        otherKey: 'categoryId',
      });
      
    models.Category.belongsToMany(models.BlogPost, {
        as: 'blogPost',
        through: PostCategory,
        foreignKey: 'categoryId',
        otherKey: 'postId'
      });
    };

    return PostCategory;
  };
