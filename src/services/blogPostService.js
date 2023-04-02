const { BlogPost, User, Category } = require('../models');

// const addNewPost = async () => {};

const getAllPosts = async () => {
  const posts = await BlogPost.findAll({ include: [
    { model: User, as: 'user', attributes: { exclude: ['password'] } },
    { model: Category, as: 'categories', through: { attributes: [] } },
  ] });
  return posts;
};

const getOnePost = async (id) => {
  const post = await BlogPost.findByPk(id, {
    include: [
      { model: User, required: true, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ] });

  if (!post) return { type: 'POST_NOT_EXIST' };

  return post;
};

module.exports = {
  getAllPosts,
  getOnePost,
};
