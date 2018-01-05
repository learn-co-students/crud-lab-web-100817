import React, { Component } from "react";
import Reviews from "./Reviews";

class ReviewInput extends Component {
  state = {
    text: ""
  };

  handleChange = e => {
    this.setState({
      text: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.store.dispatch({
      type: "ADD_REVIEW",
      review: this.state.text,
      restId: this.props.restaurantId
    });
    this.setState({
      text: ""
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.text}
            onChange={this.handleChange}
          />
        </form>
        <Reviews
          store={this.props.store}
          restaurantId={this.props.restaurantId}
        />
      </div>
    );
  }
}

export default ReviewInput;
