import React, { Component } from "react";

class RestaurantInput extends Component {
  state = {
    text: ""
  };
  handleSubmit = event => {
    event.preventDefault();
    this.props.store.dispatch({
      type: "ADD_RESTAURANT",
      payload: this.state.text
    });
    this.setState({ text: "" });
  };
  handleChange = event => {
    this.setState({ text: event.target.value });
    console.log(this.state.text);
  };
  render() {
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        <label>
          Add Restaurant
          <input
            type="text"
            onChange={event => this.handleChange(event)}
            value={this.state.text}
          />
        </label>
        <input type="submit" />
      </form>
    );
  }
}

export default RestaurantInput;
