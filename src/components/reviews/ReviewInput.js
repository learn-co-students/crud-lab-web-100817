import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  state = {
    text: ''
  };

  handleChange = e => this.setState({ text: e.target.value });

  handleSubmit = e => {
    e.preventDefault();
    // const newReview = { review: this.state };
    // newReview.restaurantId = this.props.restaurant.id;
    const newReview = {
      ...this.state,
      restaurantId: this.props.restaurantId
    };
    this.props.store.dispatch({
      type: 'ADD_REVIEW',
      review: newReview
    });
    this.setState({ text: '' });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.text}
          />
        </form>
        <br />
        <Reviews
          store={this.props.store}
          restaurantId={this.props.restaurantId}
        />
      </div>
    );
  }
}

export default ReviewInput;
