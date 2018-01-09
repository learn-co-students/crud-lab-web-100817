import React, { Component } from "react";

class Review extends Component {
  handleDelete = id => {
    // debugger;
    console.log("inside handledelete", id, this.props);
    this.props.store.dispatch({ type: "DELETE_REVIEW", id: id });
  };
  render() {
    console.log("review", this.props.review);
    return (
      <li>
        {this.props.review.text}
        <button
          onClick={() => {
            this.handleDelete(this.props.review.id);
          }}
        >
          <img
            src="http://www.freeiconspng.com/uploads/delete-dust-bin-erase-eraser-remove-icon-1.png"
            width="10px"
            alt="delete"
          />
        </button>
      </li>
    );
  }
}

export default Review;
