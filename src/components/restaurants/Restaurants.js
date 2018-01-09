import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {

  render() {

    console.log("restaurants", this.props);

    const restaurants = this.props.store.getState().restaurants.map((restaurant, index) => {
      return <Restaurant key={index} restaurant={restaurant} store={this.props.store} />
    })

    return(
      <ul>
        Restaurants Component
        {restaurants}
      </ul>
    );
  }
};

export default Restaurants;
