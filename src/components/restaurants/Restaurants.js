import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {

  reviews(restaurant, data) {
    return data.reviews.filter(review => {
      return review.restaurantId === restaurant.id
    })
  }

  render() {
    let data = this.props.store.getState()
    var restaurants = this.props.store.getState().restaurants.map( (restaurant, i) => {

      return (<Restaurant
            key={i}
            restaurant={restaurant}
            store={this.props.store}
            reviews={data.reviews !== undefined ? this.reviews(restaurant,data) : null}
          />)
    })

    return(
      <ul>
        {restaurants}
      </ul>
    );
  }
};

export default Restaurants;
