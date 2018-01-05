import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(
  state = { restaurants: [], reviews: [] },
  action
) {
  const copyOfState = { ...state };
  switch (action.type) {
    case 'ADD_RESTAURANT':
      const newRestaurant = Object.assign({}, action.restaurant, {
        id: cuid()
      });
      copyOfState.restaurants.push(newRestaurant);
      return copyOfState;
    case 'DELETE_RESTAURANT':
      copyOfState.restaurants = state.restaurants.filter(
        restaurant => restaurant.id !== action.id
      );
      return copyOfState;
    case 'ADD_REVIEW':
      const newReview = { ...action.review, id: cuid() };
      copyOfState.reviews.push(newReview);
      return copyOfState;
    case 'DELETE_REVIEW':
      copyOfState.reviews = state.reviews.filter(
        review => review.id !== action.id
      );
      return copyOfState;
    default:
      return state;
  }
}
