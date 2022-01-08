const { format } = require("../../db");
const models = require("../models");

module.exports = {
  post: (req, res) => {
    const { id } = req.body;
    models.blog.getOne(id, (err, results) => {
      if (err) {
        res.status(404).send();
      }
      if (results.length > 0) {
        const { id, author, title, body } = results[0];
        const formatResults = {
          id,
          author,
          title,
          body,
        };
        res.status(200).send(formatResults);
      } else {
        res.status(404).send();
      }
    });
  },
  delete: (req, res) => {
    const { id } = req.query;
    models.blog.deleteOne(id, (err, results) => {
      if (err) {
        res.status(404).send();
      }
      res.status(200).send("deleted");
    });
  },
};
