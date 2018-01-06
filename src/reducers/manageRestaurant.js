
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {restaurants: [], reviews: []}, action) {
  switch(action.type) {
    case 'ADD_RESTAURANT':
      const restaurant = { text: action.restaurant.text, id: cuidFn() }
     return Object.assign({}, state, {restaurants: state.restaurants.concat(restaurant)});
    case 'DELETE_RESTAURANT':
      const newRestaurants = state.restaurants.filter(restaurant => restaurant.id !== action.id)
      return Object.assign({}, state, {restaurants: newRestaurants})
    case 'ADD_REVIEW':
      let review = Object.assign({}, action.review, {id: cuidFn()})
      return Object.assign({}, state,{reviews: state.reviews.concat(review)});
    case 'DELETE_REVIEW':
      const newReviews = state.reviews.filter(review => review.id !== action.id)
      return Object.assign({}, state, {reviews: newReviews});
    default:
     return state;
  }

}
