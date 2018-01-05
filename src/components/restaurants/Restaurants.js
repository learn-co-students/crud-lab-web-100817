import React, { Component } from "react";
import Restaurant from "./Restaurant";

class Restaurants extends Component {
  restaurants = () => {
    console.log(this.props.store.getState());
    return this.props.store.getState().restaurants.map(r => {
      return <Restaurant restaurant={r} key={r.id} store={this.props.store} />;
    });
  };

  render() {
    return <ul>{this.restaurants()}</ul>;
  }
}

export default Restaurants;
