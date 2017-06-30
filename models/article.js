var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var articleSchema = new Schema({
  headline: {
    type: String,
    index: {
            unique: true
        }
  },
  url: {
    type: String,
    index: {
            unique: true
        }
  },
  favorited: {
    type: Boolean,
    default: false
  }
});

var Article = mongoose.model("Article", articleSchema);

module.exports = Article;