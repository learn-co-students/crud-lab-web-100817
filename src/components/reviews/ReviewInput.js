import React, { Component } from "react";
import Reviews from "./Reviews";

class ReviewInput extends Component {
  state = { text: "" };

  handleChange = event => {
    this.setState({ text: event.target.value });
  };
  handleSubmit = event => {
    event.preventDefault();
    // update store
    this.props.store.dispatch({
      type: "ADD_REVIEW",
      payload: { text: this.state.text, restaurantId: this.props.restaurantId }
    });
    this.setState({ text: "" });
  };
  render() {
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        <label>
          Write a review
          <input
            type="text"
            onChange={event => this.handleChange(event)}
            value={this.state.text}
          />
        </label>
        <input type="submit" />
        <Reviews
          store={this.props.store}
          restaurantId={this.props.restaurantId}
          handleDelete={this.props.handleDelete}
        />
      </form>
    );
  }
}

export default ReviewInput;
