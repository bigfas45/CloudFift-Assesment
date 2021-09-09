const db = require('./database/db');
const { v4: uuidv4 } = require('uuid');

class Exam {
  constructor(questions, category, option1, option2, option3, option4) {
    this.questions = questions;
    this.category = category;
    this.option1 = option1;
    this.option2 = option2;
    this.option3 = option3;
    this.option4 = option4;
  }

  async save() {
    let sql = `
    INSERT INTO exams (id, questions, category, option1, option2, option3, option4) VALUES ('${uuidv4().replace(/-/g, '')}' ,'${this.questions}', '${this.category}', '${this.option1}', '${this.option2}', '${this.option3}', '${this.option4}');
  `;

    const [newExam, _] = await db.execute(sql);

    return newExam;
  }

  static findAll() {
    let sql = 'SELECT * FROM exams';

    return db.execute(sql);
  }

  static findById(id) {
    let sql = `SELECT * FROM cloudfit.exams WHERE cloudfit.exams.id='${id}' `;

    return db.execute(sql);
  }


  static findByCategory(id) {
    let sql = `SELECT * FROM exams WHERE category='${id}' `;

    return db.execute(sql);
  }


  async update(id) {
    let sql = `UPDATE exams SET questions = '${this.questions}', category = '${this.category}', option1 = '${this.option1}', option2 = '${this.option2}', option3 = '${this.option3}', option4 = '${this.option4}' WHERE exams.id = '${id}'`;

 return db.execute(sql);
  }

  static delete(id) {
    let sql = `DELETE  FROM exams WHERE id='${id}' `;

    return db.execute(sql);
  }
}

module.exports = Exam;
