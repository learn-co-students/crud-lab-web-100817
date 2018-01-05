import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const reviewsForRestaurant = this.props.store
      .getState()
      .reviews.filter(
        review => review.restaurantId === this.props.restaurantId
      );
    return (
      <div>
        <ul>
          {reviewsForRestaurant.map(review => {
            return (
              <Review
                key={review.id}
                store={this.props.store}
                review={review}
              />
            );
          })}
        </ul>
        <br />
      </div>
    );
  }
}

export default Reviews;
