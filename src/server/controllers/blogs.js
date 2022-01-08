const models = require("../models");

module.exports = {
  get: (req, res) => {
    models.blogs.getAll((err, results) => {
      if (err) {
        res.status(404).send();
      }
      res.status(200).send(results);
    });
  },
  post: (req, res) => {
    const blog = req.body;

    models.blogs.create(blog, (err, results) => {
      if (err) {
        res.status(422).send();
      }
      res.status(201).send("created");
    });
  },
};
