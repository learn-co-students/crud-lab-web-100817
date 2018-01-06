import React, { Component } from 'react';

class Review extends Component {
  handleDelete = () => {
    return this.props.store.dispatch({
      type: 'REMOVE_REVIEW',
      id: this.props.review.id
    });
  };

  render() {
    console.log(this.props.store.getState());
    return (
      <div>
        <li>{this.props.review.content}</li>
        <button onClick={e => this.handleDelete(e)}>Delete Review</button>
      </div>
    );
  }
}

export default Review;
