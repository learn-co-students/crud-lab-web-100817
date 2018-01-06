import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(
  state = {
    restaurants: [],
    reviews: []
  },
  action
) {
  switch (action.type) {
    case 'ADD_RESTAURANT':
      let restaurant = Object.assign(
        {},
        { restaurant: action.restaurant },
        { id: cuidFn() }
      );
      console.log('new rest added', state);
      return Object.assign({}, state, {
        restaurants: [...state.restaurants, restaurant]
      });

    case 'REMOVE_RESTAURANT':
      const restaurants = state.restaurants.filter(rest => {
        return rest.id !== action.id;
      });
      return Object.assign({}, state, { restaurants });
    case 'ADD_REVIEW':
      const review = Object.assign(
        {},
        { content: action.review },
        {
          restaurant: action.restaurantId,
          id: cuidFn()
        }
      );
      console.log('the action', action);
      console.log('the review', review);
      console.log('cuid test', cuidFn());
      return Object.assign({}, state, {
        reviews: [...state.reviews, review]
      });
    case 'REMOVE_REVIEW':
      const reviews = state.reviews.filter(review => {
        return review.id !== action.id;
      });
      return Object.assign({}, state, { reviews });
    default:
      return state;
  }
}
