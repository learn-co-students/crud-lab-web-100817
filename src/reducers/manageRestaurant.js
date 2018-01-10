import cuid from "cuid";
export const cuidFn = cuid;

export default function manageRestaurants(
  state = {
    restaurants: [],
    reviews: []
  },
  action
) {
  switch (action.type) {
    case "ADD_RESTAURANT":
      const resto = Object.assign({}, action.restaurantName, { id: cuid() });
      return {
        restaurants: state.restaurants.concat(resto),
        reviews: state.reviews
      };
    case "DELETE_RESTAURANT":
      const restaurants = state.restaurants.filter(restaurant => {
        return restaurant.id !== action.id;
      });
      return {
        restaurants: { restaurants },
        reviews: state.reviews
      };
    case "ADD_REVIEW":
      const review = Object.assign({}, action.review, {
        id: cuidFn()
      });
      return Object.assign({}, state, {
        reviews: state.reviews.concat(review)
      });
    case "DELETE_REVIEW":
      const reviews = state.reviews.filter(review => review.id !== action.id);
      return Object.assign({}, state, { reviews });
    default:
      return state;
  }
}
