const db = require("../../db/index.js");

module.exports = {
  getOne: (id, cb) => {
    const qs = "SELECT * FROM BLOGS WHERE id=(?)";
    db.query(qs, [id], (err, results) => {
      if (err) {
        cb(err);
      }
      cb(null, results);
    });
  },
  deleteOne: (id, cb) => {
    const qs = "DELETE FROM BLOGS WHERE id=(?)";
    db.query(qs, [id], (err, results) => {
      if (err) {
        cb(err);
      }
      cb(null, results);
    });
  },
};
