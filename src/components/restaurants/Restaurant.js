import React, { Component } from "react";
import ReviewInput from "./ReviewInput";
import Reviews from "./Reviews";

class Restaurant extends Component {
  handleDelete = () => {
    this.props.store.dispatch({
      type: "DELETE_RESTAURANT",
      id: this.props.restaurant.id
    });
  };
  render() {
    console.log("state at restaurant level", this.props.store.getState());
    return (
      <div>
        <p>{this.props.restaurant.restaurantName}</p>
        <button onClick={this.handleDelete} />
        <ReviewInput
          store={this.props.store}
          restaurantId={this.props.restaurant.id}
        />
        <Reviews
          store={this.props.store}
          restaurantId={this.props.restaurant.id}
        />
      </div>
    );
  }
}

export default Restaurant;
