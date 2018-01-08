import React, { Component } from "react";
import ReviewInput from "../reviews/ReviewInput";

class Restaurant extends Component {
  handleOnClick = () => {
    this.props.store.dispatch({
      type: "DELETE_RESTAURANT",
      id: this.props.restaurant.id
    });
  };

  render() {
    const { text, id } = this.props.restaurant;
    return (
      <li>
        {text}
        <button onClick={this.handleOnClick}>Shut Down the Joint</button>
        <ReviewInput store={this.props.store} restaurantId={id} />
      </li>
    );
  }
}

export default Restaurant;
