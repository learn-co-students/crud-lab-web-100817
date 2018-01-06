import React, { Component } from 'react';
import ReviewInput from '../reviews/ReviewInput';

class Restaurant extends Component {
  handleDelete = () => {
    return this.props.store.dispatch({
      type: 'REMOVE_RESTAURANT',
      id: this.props.restaurant.id
    });
  };

  render() {
    return (
      <div>
        <li>{this.props.restaurant.restaurant}</li>
        <button onClick={() => this.handleDelete()}>Delete Me</button>
        <ReviewInput store={this.props.store} id={this.props.id} />
      </div>
    );
  }
}

export default Restaurant;
