const express = require('express');
const router = express.Router();

const {
  create,
  examById,
  read,
  update,
  remove,
  examByCategory
} = require('../controllers/exam');

const {categoryById}= require('../controllers/category');

const { examValidator } = require('../validator');

router.post('/exam/create', examValidator, create);

router.get('/exam/:examId', read);

router.put('/exam/:examId', update);

router.delete('/exam/:examId', remove);

router.get('/exam/category/:categoryId', examByCategory);

router.param('examId', examById);
router.param('categoryId', categoryById);

module.exports = router;
