import React, { Component } from "react";
import Panel from "./common/Panel";
import ArticleForm from "./common/ArticleForm";
import API from "../utils/API";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      articles: []
    };

    this.getArticles = this.getArticles.bind(this);
    this.renderArticles = this.renderArticles.bind(this);
  }

  componentDidMount() {
    this.getArticles();
  }
  getArticles() {
    API.getArticles().then((res) => {
      const favoriteArticles = res.data.filter(article => {
        return article.favorited === false;
      });
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
      <div className="container">
        <div className="row">
          <ArticleForm
            getArticles={this.getArticles}
          />
        </div>
        <div className="panel panel-success">
          <div className="panel-heading">
            <h3 className="panel-title"><strong><i className="fa fa-list"></i>   Results</strong></h3>
          </div>
          <div className="panel-body">
          {this.renderArticles()}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
