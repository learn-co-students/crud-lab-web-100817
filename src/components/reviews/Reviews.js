import React, { Component } from "react";
import Review from "./Review";

class Reviews extends Component {
  render() {
    const associatedReviews = this.props.store
      .getState()
      .reviews.filter(
        review => review.restaurantId === this.props.restaurantId
      );

    const reviews = associatedReviews.map((review, index) => {
      return <Review store={this.props.store} key={index} review={review} />;
    });

    return <ul>{reviews}</ul>;
  }
}

export default Reviews;
