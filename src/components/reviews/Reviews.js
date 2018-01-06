import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const reviews = this.props.reviews !== undefined ? this.props.reviews.map((review, i) => <Review key={i} review={review} store= {this.props.store}/>) : null
    return (
      <ul>
        {reviews}
      </ul>
    );
  }
};

export default Reviews;
