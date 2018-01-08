import React, { Component } from "react";
import Restaurant from "./Restaurant";

class Restaurants extends Component {
  render() {
    const { store } = this.props;
    const restaurants = store
      .getState()
      .restaurants.map((restaurant, index) => {
        return (
          <Restaurant
            restaurant={restaurant}
            key={index}
            store={this.props.store}
          />
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
