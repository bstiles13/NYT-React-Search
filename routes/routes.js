var express = require("express");
var path = require("path");

var articleController = require("../controllers/articleController");

var router = new express.Router();

router.get("/api/articles/:id?", articleController.index);
router.post("/api/articles", articleController.create);
router.patch("/api/articles/:id", articleController.update);
router.delete("/api/articles/:id", articleController.destroy);
router.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = router;
