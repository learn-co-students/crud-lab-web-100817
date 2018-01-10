import React, { Component } from "react";

class Review extends Component {
  handleDelete = () => {
    this.props.store.dispatch({
      type: "DELETE_RESTAURANT",
      id: this.props.review.id
    });
  };
  render() {
    console.log("review content", this.props.review.content);
    return (
      <div>
        <p>{this.props.review.content}</p>
        <button onClick={this.handleDelete} />
      </div>
    );
  }
}

export default Review;
