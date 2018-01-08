import React, { Component } from "react";

class Review extends Component {
  handleOnClick = () => {
    this.props.store.dispatch({
      type: "DELETE_REVIEW",
      id: this.props.review.id
    });
  };

  render() {
    return (
      <li>
        {this.props.review.text}
        <button onClick={this.handleOnClick}>Remove Comment</button>
      </li>
    );
  }
}

export default Review;

