import React, { Component } from "react";

class ReviewInput extends Component {
  constructor() {
    super();
    this.state = {
      content: ""
    };
  }

  handleChange = event => {
    this.setState({ content: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.store.dispatch({
      type: "ADD_REVIEW",
      review: {
        content: this.state.content,
        restoId: this.props.restaurantId
      }
    });
    this.setState({
      content: ""
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.content}
            onChange={this.handleChange}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default ReviewInput;
