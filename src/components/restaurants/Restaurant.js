import React, { Component } from 'react';
import ReviewInput from '../reviews/ReviewInput';

class Restaurant extends Component {
  handleClick = e => {
    this.props.store.dispatch({
      type: 'DELETE_RESTAURANT',
      id: this.props.restaurant.id
    });
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <li>
          {this.props.restaurant.text}
          <button onClick={this.handleClick} />
          <h2>Reviews:</h2>
          <h3>Enter a Review: </h3>
          <ReviewInput
            store={this.props.store}
            restaurantId={this.props.restaurant.id}
          />
        </li>
      </div>
    );
  }
}

export default Restaurant;
