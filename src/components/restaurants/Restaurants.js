import React, { Component } from "react";
import Restaurant from "./Restaurant";

class Restaurants extends Component {
  render() {
    let restaurantList;
    if (this.props.store.getState().restaurants) {
      restaurantList = this.props.store
        .getState()
        .restaurants.map(restaurant => {
          return (
            <Restaurant
              key={restaurant.id}
              restaurant={restaurant}
              store={this.props.store}
            />
          );
        });
    }
    return <ul>{restaurantList}</ul>;
  }
}

export default Restaurants;
