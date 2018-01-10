import React, { Component } from "react";
import Restaurant from "./Restaurant";

class Restaurants extends Component {
  render() {
    const restaurants = this.props.store
      .getState()
      .restaurants.map((restaurant, index) => {
        return (
          <li>
            <Restaurant restaurant={restaurant} store={this.props.store} />
          </li>
        );
      });
    return (
      <div>
        <ul>{restaurants}</ul>
      </div>
    );
  }
}

export default Restaurants;
