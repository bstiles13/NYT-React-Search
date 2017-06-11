var Article = require("../models/article");

module.exports = {
  // This method handles retrieving Articles from the db
  index: function(req, res) {
    var query;
    if (req.query) {
      query = req.query;
    }
    else {
      query = req.params.id ? { _id: req.params.id } : {};
    }
    Article.find(query)
      .then(function(doc) {
        res.json(doc);
      }).catch(function(err) {
        res.json(err);
      });
  },
  // This method handles creating new Articles
  create: function(req, res) {
    var results = req.body.response.data.response.docs;
    // console.log(results);
    for (var i = 0; i < results.length; i++) {
      console.log(results[i].headline.main);
      Article.create({headline: results[i].headline.main});
    }
    res.send('complete');
  },
  // This method handles updating Articles
  update: function(req, res) {
    Article.update({
      _id: req.params.id
    },
      req.body
    ).then(function(doc) {
      res.json(doc);
    }).catch(function(err) {
      res.json(err);
    });
  },
  // This method handles deleting Articles
  destroy: function(req, res) {
    Article.remove({
      _id: req.params.id
    }).then(function(doc) {
      res.json(doc);
    }).catch(function(err) {
      res.json(err);
    });
  }
};