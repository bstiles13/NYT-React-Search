import React, { Component } from "react";
import API from "../../utils/API";

class Panel extends Component {

  favoriteQuote(quote) {
    API.favoriteQuote(quote).then(this.props.getQuotes);
  }

  deleteQuote(id) {
    API.deleteQuote(id).then(this.props.getQuotes);
  }
  render() {
    return (
        <div className="panel panel-default">
          <div className="panel-body">
            <i
              onClick={() => this.favoriteQuote(this.props.quote)}
              style={styles.favoriteStyle}
              className={this.props.quote.favorited ? "fa fa-star gold" : "fa fa-star-o"}
              aria-hidden="true"
            />
            <i
              onClick={() => this.deleteQuote(this.props.quote._id)}
              style={styles.deleteStyle}
              className="fa fa-trash-o"
              aria-hidden="true"
            />
            {this.props.quote.text}
          </div>
        </div>
    );
  }
}

const styles = {
  favoriteStyle: {
    cursor: "pointer",
    marginRight: 10,
    float: "left"
  },
  deleteStyle: {
    cursor: "pointer",
    marginLeft: 5,
    color: "red",
    float: "right"
  }
};

export default Panel;
