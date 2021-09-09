const express = require('express');
const router = express.Router();

const {
  create,
  list,
  categoryById,
  read,
  update,
  remove,
} = require('../controllers/category');
const { categoryValidator } = require('../validator');

router.post('/category/create/', categoryValidator, create);

router.get('/category/', list);

router.get('/category/:categoryId', read);

router.put('/category/:categoryId', categoryValidator, update);

router.delete('/category/:categoryId', remove);

router.param('categoryId', categoryById);

module.exports = router;
