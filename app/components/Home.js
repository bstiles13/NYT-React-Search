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
  }

  componentDidMount() {
    this.getArticles();
  }
  getArticles() {
    API.getArticles().then((res) => {
      this.setState({ articles: res.data });
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
            <h3 className="panel-title"><strong><i className="fa fa-list-alt"></i>   Results</strong></h3>
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
