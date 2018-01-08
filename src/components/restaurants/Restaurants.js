import React, { Component } from "react";
import Restaurant from "./Restaurant";

class Restaurants extends Component {
  render() {
    const restaurantNames = this.props.store
      .getState()
      .restaurants.map(restaurant => (
        <Restaurant store={this.props.store} restaurant={restaurant} />
      ));
    return <ul>{restaurantNames}</ul>;
  }
}

export default Restaurants;
