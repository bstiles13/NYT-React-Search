import React, { Component } from "react";
import API from "../../utils/API";

class Panel extends Component {

  favoriteArticle(article) {
    API.favoriteArticle(article).then(this.props.getArticles);
  }

  deleteArticle(id) {
    API.deleteArticle(id).then(this.props.getArticles);
  }
  render() {
    return (
        <div className="panel panel-default">
          <div className="panel-body">
            <i
              onClick={() => this.favoriteArticle(this.props.article)}
              style={styles.favoriteStyle}
              className={this.props.article.favorited ? "fa fa-star gold" : "fa fa-star"}
              aria-hidden="true"
            />
            <i
              onClick={() => this.deleteArticle(this.props.article._id)}
              style={styles.deleteStyle}
              className="fa fa-trash"
              aria-hidden="true"
            />
            <a href={this.props.article.url} target='_blank'>{this.props.article.headline}</a>
          </div>
        </div>
    );
  }
}

const styles = {
  favoriteStyle: {
    cursor: "pointer",
    marginRight: 10,
    float: "left",
    fontSize: 15
  },
  deleteStyle: {
    cursor: "pointer",
    marginLeft: 5,
    color: "orange",
    float: "right",
    fontSize: 15
  }
};

export default Panel;
