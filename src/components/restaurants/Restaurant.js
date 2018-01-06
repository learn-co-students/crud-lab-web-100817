import React, { Component } from 'react';
import ReviewInput from '../reviews/ReviewInput';
import Reviews from '../reviews/Reviews';


class Restaurant extends Component {

  handleClick = (e) => {
    this.props.store.dispatch({
      type:"DELETE_RESTAURANT",
      id: this.props.restaurant.id,
    })
  }

  render() {
    return (
      <li>
        <div>
          {this.props.restaurant.text}
        </div>
        <button onClick={this.handleClick}>Delete</button>
        <Reviews reviews={this.props.reviews} store={this.props.store} />
        <ReviewInput store={this.props.store} restaurant_id={this.props.restaurant.id}/>
      </li>
    );
  }
};

export default Restaurant;
