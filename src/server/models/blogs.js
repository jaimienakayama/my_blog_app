const db = require("../../db/index.js");

module.exports = {
  getAll: (cb) => {
    const qs = "SELECT * FROM BLOGS";
    db.query(qs, (err, results) => {
      if (err) {
        cb(err);
      }
      cb(null, results);
    });
  },

  create: (blog, cb) => {
    const qs = "INSERT INTO blogs(author, title, body) VALUES(?, ?, ?)";
    const { author, title, body } = blog;

    db.query(qs, [author, title, body], (err, results) => {
      if (err) {
        cb(err);
      }
      cb(null, results);
    });
  },
};
