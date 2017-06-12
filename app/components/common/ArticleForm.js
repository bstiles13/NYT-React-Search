import React, { Component } from "react";
import API from "../../utils/API";

class ArticleForm extends Component {
  constructor() {
    super();
    this.state = {
      termValue: '',
      startValue: '',
      endValue: ''
    };

    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleStartChange = this.handleStartChange.bind(this);
    this.handleEndChange = this.handleEndChange.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }
  handleTermChange(event) {
    this.setState({ termValue: event.target.value });
  }
  handleStartChange(event) {
    this.setState({ startValue: event.target.value });
  }
  handleEndChange(event) {
    this.setState({ endValue: event.target.value });
  }
  handleButtonClick(event) {
    event.preventDefault();
    const newArticle = this.state;
    console.log('test');
    console.log(newArticle);
    API.saveArticle(newArticle).then(this.props.getArticles);
    this.setState({
        termValue: '',
        startValeu: '',
        endValue: ''
    });
  }
  render() {
    return (

      <div className="col-sm-12">
        <div className="panel panel-success">
          <div className="panel-heading">
            <h3 className="panel-title"><strong><i className="fa fa-list-alt"></i>   Search Parameters</strong></h3>
          </div>
          <div className="panel-body">

            <form role="form">

              <div className="form-group">
                <label htmlFor="search">Search Term:</label>
                <input
                type="text"
                className="form-control"
                id="search"
                style={{
                  resize: "none"
                }}
                onChange={this.handleTermChange}
                placeholder="Search in New York Times"
              />
              </div>

              <div className="form-group">
                <label htmlFor="start-year">Start Year (Optional):</label>
                <input
                type="text"
                className="form-control"
                id="start-year"
                style={{
                  resize: "none"
                }}
                onChange={this.handleStartChange}
                placeholder="YYYYMMDD"
              />
              </div>

              <div className="form-group">
                <label htmlFor="end-year">End Year (Optional):</label>
                <input
                type="text"
                className="form-control"
                id="end-year"
                style={{
                  resize: "none"
                }}
                onChange={this.handleEndChange}
                placeholder="YYYYMMDD"
              />
              </div>

              <button
                type="submit"
                className="btn btn-default"
                id="run-search"
                onClick={this.handleButtonClick}
              >
              <i className="fa fa-search"></i> Search</button>

            </form>
          </div>
        </div>
      </div>
      
    );
  }
}

export default ArticleForm;