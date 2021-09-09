const Category = require('../models/category');

// const { body } = require('express-validator');

exports.create = async (req, res) => {
  const { title } = req.body;

  const category = new Category(title);

  await category.save();

  res.status(201).json({
    message: 'Category Created',
    category,
  });
};

exports.list = async (req, res) => {
  try {
    const category = await Category.findAll();
    if (!category) {
      return res.status(400).json({ errors: 'Category Table is empty' });
    }
    res.status(200).json(category[0]);
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      error: 'Something went wrong',
    });
  }
};

exports.categoryById = async (req, res, next, id) => {

  try {
    const [category, _] = await Category.findById(id);

    req.category = category[0];

    next();
  } catch (error) {
    return res.status(400).json({
      error: 'Category does not exsit',
    });
  }
};

exports.read = (req, res) => {
  if (!req.category) {
    return res.status(400).json({
      error: 'Invalid Category Id',
    });
  } else {
    return res.json(req.category);
  }
};

exports.update = async (req, res) => {
  const { title } = req.body;
  if (!req.category) {
    return res.status(400).json({
      error: 'Invalid Category Id',
    });
  }
  const id = req.category.id;
  console.log('id', id);
  const category = new Category(title);
  await category.update(id);
  res.status(201).json({
    message: 'Category Updated',
    category,
  });
};

exports.remove = async (req, res) => {
  const category = req.category;
  
  try {
    await Category.delete(category.id);
    return res.status(201).json({
      message: 'Category Deleted',
    });
  } catch (error) {
    return res.status(400).json({
      error: 'Category does not exsit',
    });
  }
};
