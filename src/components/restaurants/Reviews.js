import React, { Component } from "react";
import Review from "./Review";

class Reviews extends Component {
  render() {
    const reviewsToFilter = this.props.store.getState().reviews;
    const reviewsToMap = reviewsToFilter.filter(
      review => review.restoId === this.props.restaurantId
    );
    const reviews = reviewsToMap.map((review, index) => {
      return (
        <li>
          <Review review={review} store={this.props.store} />
        </li>
      );
    });
    return <ul>{reviews}</ul>;
  }
}

export default Reviews;
