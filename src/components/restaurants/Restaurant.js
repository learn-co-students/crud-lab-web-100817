import React, { Component } from "react";
import Reviews from "../reviews/Reviews";
import ReviewInput from "../reviews/ReviewInput";

class Restaurant extends Component {
  handleClick = e => {
    this.props.store.dispatch({
      type: "DELETE_RESTAURANT",
      id: this.props.restaurant.id
    });
  };
  render() {
    return (
      <li>
        {this.props.restaurant.text}
        <ReviewInput
          store={this.props.store}
          restaurantId={this.props.restaurant.id}
        />
        <button onClick={this.handleClick} />
      </li>
    );
  }
}

export default Restaurant;
