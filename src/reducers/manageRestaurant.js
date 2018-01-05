import cuid from "cuid";
export const cuidFn = cuid;

let defaultState = {
  restaurants: [],
  reviews: []
};

export default function manageRestaurants(state = defaultState, action) {
  switch (action.type) {
    case "ADD_RESTAURANT":
      return {
        ...state,
        restaurants: [
          ...state.restaurants,
          { text: action.restaurant, id: cuid() }
        ]
      };
    case "DELETE_RESTAURANT":
      return {
        ...state,
        restaurants: state.restaurants.filter(r => r.id !== action.id)
      };
    case "ADD_REVIEW":
      return {
        ...state,
        reviews: [
          ...state.reviews,
          { text: action.review, restaurantId: action.restId, id: cuid() }
        ]
      };
    case "DELETE_REVIEW":
      return {
        ...state,
        reviews: state.reviews.filter(r => r.id !== action.id)
      };
    default:
      return state;
  }
}
