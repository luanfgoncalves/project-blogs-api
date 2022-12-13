const { Category } = require('../models');

const getCategories = async () => {
    const categories = await Category.findAll();
  
    return categories;
};

// Req 8
const addNewCategory = async (category) => {
  // console.log(category.name);
  if (category.name === undefined) {
    return { type: 'NAME_REQUIRED' }; 
  }

  const newCategory = await Category.create(category);
  return newCategory;
};

module.exports = {
  getCategories,
  addNewCategory,
};
