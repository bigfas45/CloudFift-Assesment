const Exam = require('../models/exam');

exports.create = async (req, res) => {
  const { questions, category, option1, option2, option3, option4 } = req.body;
  const exam = new Exam(
    questions,
    category,
    option1,
    option2,
    option3,
    option4
  );

  await exam.save();

  res.status(201).json({
    message: 'Exam Created',
    exam,
  });
};

exports.examById = async (req, res, next, id) => {
  try {
    const [exam, _] = await Exam.findById(id);

    req.exam = exam[0];
    next();
  } catch (error) {
    return res.status(400).json({
      error: 'Exam does not exsit',
    });
  }
};

exports.read = (req, res) => {
  if (!req.exam) {
    return res.status(400).json({
      error: 'Invalid exam Id',
    });
  } else {
    return res.json(req.exam);
  }
};

exports.update = async (req, res) => {
  let { questions, category, option1, option2, option3, option4 } = req.body;
  if (!req.exam) {
    return res.status(400).json({
      error: 'Invalid exam Id',
    });
  }
  const id = req.exam.id;
  console.log('id', id);

  if (!questions) {
    questions = req.exam.questions;
  }
  if (!category) {
    category = req.exam.category;
  }
  if (!option1) {
    option1 = req.exam.option1;
  }
  if (!option2) {
    option2 = req.exam.option2;
  }
  if (!option3) {
    option3 = req.exam.option3;
  }
  if (!option4) {
    option4 = req.exam.option4;
  }

  const exam = new Exam(
    questions,
    category,
    option1,
    option2,
    option3,
    option4
  );
  await exam.update(id);
  res.status(201).json({
    message: 'exam Updated',
    exam,
  });
};


exports.remove = async (req, res) => {
  const exam = req.exam;
  try {
    await Exam.delete(exam.id);
    return res.status(201).json({
      message: 'Exam Deleted',
    });
  } catch (error) {
    return res.status(400).json({
      error: 'Exam does not exsit',
    });
  }
};



exports.examByCategory = async (req, res) => {
  try {
    const [exam, _] = await Exam.findByCategory(req.category.id);

    return res.status(201).json({
      message: 'Successful',
      exam: exam
    });

  } catch (error) {
    return res.status(400).json({
      error: 'Exam does not exsit',
    });
  }
};
