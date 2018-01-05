import React, { Component } from 'react';
import Restaurant from './Restaurant';

class Restaurants extends Component {
  render() {
    return (
      <div>
        <h1>Restaurants:</h1>
        <ul>
          {this.props.store.getState().restaurants.map(restaurant => {
            return (
              <Restaurant
                key={restaurant.id}
                store={this.props.store}
                restaurant={restaurant}
                id={restaurant.id}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Restaurants;
