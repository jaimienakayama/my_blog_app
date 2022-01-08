const express = require("express");
const path = require("path");
const router = require("./routes.js");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "./../../public/dist")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/", router);

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});
