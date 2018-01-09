import React, { Component } from "react";
import Reviews from "../reviews/Reviews";
import ReviewInput from "../reviews/ReviewInput";

class Restaurant extends Component {
  handleDelete = id => {
    this.props.store.dispatch({ type: "DELETE_RESTAURANT", id: id });
  };
  render() {
    return (
      <li>
        {this.props.restaurant.text}

        <button
          onClick={() => {
            this.handleDelete(this.props.restaurant.id);
          }}
        >
          <img
            src="http://www.freeiconspng.com/uploads/delete-dust-bin-erase-eraser-remove-icon-1.png"
            width="10px"
            alt="delete"
          />
        </button>

        <ReviewInput
          store={this.props.store}
          restaurantId={this.props.restaurant.id}
          handleDelete={this.handleDelete}
        />
      </li>
    );
  }
}

export default Restaurant;
