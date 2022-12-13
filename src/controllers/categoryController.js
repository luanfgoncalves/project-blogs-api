// Req 8, 9 , 10
const categoryService = require('../services/categoryService');

const getCategories = async (_req, res) => {
    const categories = await categoryService.getCategories();
    return res.status(200).json(categories);
};

const addNewCategory = async (req, res, next) => {
  try {
    const category = await categoryService.addNewCategory(req.body);
    if (category.type === 'NAME_REQUIRED') {
      return res
        .status(400)
        .json({ message: '"name" is required' });
    }
    return res.status(201).json(category);
  } catch (err) {
    next(err);
  }
};

module.exports = {
    getCategories,
    addNewCategory,
};
