let id = 0
let other_id = 0
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {restaurants: [], reviews:[]}, action) {
  switch (action.type) {
    case 'ADD_RESTAURANT':
      id++;
      const restaurant = Object.assign({}, action.restaurant, {id: id})
      return {restaurants: state.restaurants.concat(restaurant)}
    case 'DELETE_RESTAURANT':
      const restaurants = state.restaurants.filter(restaurant => restaurant.id !== action.id)
      return {restaurants}
    case 'ADD_REVIEW':
      other_id++
      const review = Object.assign({}, action.review, {id: cuidFn()})
      return {reviews: state.reviews.concat(review)}
    case 'DELETE_REVIEW':
      const reviews = state.reviews.filter(review => review.id !== action.id)
      return {reviews}
    default: return state;
  }
}
