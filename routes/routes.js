var express = require("express");
var path = require("path");

var quotesController = require("../controllers/quotesController");

var router = new express.Router();

router.get("/api/quotes/:id?", quotesController.index);
router.post("/api/quotes", quotesController.create);
router.patch("/api/quotes/:id", quotesController.update);
router.delete("/api/quotes/:id", quotesController.destroy);
router.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = router;
