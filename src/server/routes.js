const router = require("express").Router();
const controller = require("./controllers");

router.post("/blog", controller.blog.post);
router.delete("/blog", controller.blog.delete);

router.get("/blogs", controller.blogs.get);
router.post("/blogs", controller.blogs.post);

router.get("/*", controller.all.get);

module.exports = router;
