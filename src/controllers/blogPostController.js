const postService = require('../services/blogPostService');

const getAllPosts = async (_req, res, next) => {
  try {
    const all = await postService.getAllPosts();
    return res.status(200).json(all);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAllPosts,
};
