const path = require("path");
module.exports = {
  get: (req, res) => {
    res.sendFile(
      path.join(__dirname, "../../../public/dist/index.html"),
      (err) => err && res.status(500).send(err)
    );
  },
};
