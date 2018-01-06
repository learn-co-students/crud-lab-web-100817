import React, { Component } from 'react';
import Restaurant from './Restaurant';

class Restaurants extends Component {
  render() {
    const restaurants = this.props.store
      .getState()
      .restaurants.map((rest, i) => {
        return (
          <Restaurant
            key={i}
            store={this.props.store}
            id={rest.id}
            restaurant={rest}
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
