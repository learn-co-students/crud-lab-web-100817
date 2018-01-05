import React, { Component } from "react";
import Review from "./Review";

class Reviews extends Component {
  reviews = () => {
    console.log();
    const reviews = this.props.store.getState().reviews.filter(review => {
      return review.restaurantId === this.props.restaurantId;
    });
    return reviews.map(review => {
      return <Review review={review} store={this.props.store} />;
    });
  };

  render() {
    return <ul>{this.reviews()}</ul>;
  }
}

export default Reviews;
