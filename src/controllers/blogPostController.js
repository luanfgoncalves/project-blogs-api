const postService = require('../services/blogPostService');

const getAllPosts = async (_req, res, next) => {
  try {
    const all = await postService.getAllPosts();
    return res.status(200).json(all);
  } catch (err) {
    next(err);
  }
};

const getOnePost = async (req, res, next) => {
  try {
    const { id } = req.params; 

    const post = await postService.getOnePost(id);

    if (post.type === 'POST_NOT_EXIST') {
      return res.status(404).json({ message: 'Post does not exist' });
    }
    return res.status(200).json(post);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAllPosts,
  getOnePost,
};
