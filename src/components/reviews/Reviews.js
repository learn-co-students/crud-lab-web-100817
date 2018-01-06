import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const reviews = this.props.store.getState().reviews.filter(review => {
      return review.restaurant === this.props.id;
    });
    const list = reviews.map((review, i) => {
      return <Review key={i} review={review} store={this.props.store} />;
    });
    return <ul>{list}</ul>;
  }
}

export default Reviews;
