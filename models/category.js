const db = require('./database/db');
const { v4: uuidv4 } = require('uuid');

class Category {
  constructor(title) {
    this.title = title;
  }

  async save() {
    let sql = `
  INSERT INTO category (id, title) VALUES ('${uuidv4().replace(/-/g, '')}', '${this.title}');
  `;

    const [newCategor, _] = await db.execute(sql);

    return newCategor;
  }

  static findAll() {
    let sql = 'SELECT * FROM category';

    return db.execute(sql);
  }

  static findById(id) {
    let sql = `SELECT * FROM cloudfit.category WHERE cloudfit.category.id='${id}'  `;

    return db.execute(sql);
  }

  async update(id) {
    let sql = `UPDATE cloudfit.category SET title = '${this.title}' WHERE cloudfit.category.id ='${id}' `;

 return db.execute(sql);
  }

  static delete(id) {
    let sql = `DELETE  FROM cloudfit.category WHERE cloudfit.category.id='${id}' `;

    return db.execute(sql);
  }
}

module.exports = Category;
