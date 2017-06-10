import React, { Component } from "react";
import Panel from "./common/Panel";
import API from "../utils/API";

class Favorites extends Component {
  constructor() {
    super();
    this.state = {
      articles: []
    };

    this.getArticles = this.getArticles.bind(this);
  }
  componentDidMount() {
    this.getArticles();
  }
  getArticles() {
    API.getArticles().then((res) => {
      const favoriteArticles = res.data.filter(article => article.favorited);
      this.setState({ articles: favoriteArticles });
    });
  }

  renderArticles() {
    return this.state.articles.map(article => (
      <Panel
        article={article}
        key={article._id}
        getArticles={this.getArticles}
      />
    ));
  }
  render() {
    return (
      <div>
        <div className="jumbotron text-center">
          <h1>Your Favorite Articles</h1>
          <p>Your very best articles.</p>
        </div>
        <div className="container">
        <div className="row">
          {this.renderArticles()}
        </div>
        </div>
      </div>
    );
  }
}

export default Favorites;
