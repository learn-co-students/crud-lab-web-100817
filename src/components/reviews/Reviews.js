import React, { Component } from "react";
import Review from "./Review";

class Reviews extends Component {
  render() {
    const reviews = this.props.store.getState().reviews.filter(review => {
      return review.restaurantId === this.props.restaurantId;
    });
    // );
    const reviewList = reviews.map(review => {
      return <Review review={review} store={this.props.store} />;
    });
    return (
      <div>
        <ul>{reviewList}</ul>
      </div>
    );
  }
}

export default Reviews;
