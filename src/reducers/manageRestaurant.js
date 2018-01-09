import cuid from "cuid";
export const cuidFn = cuid;

export default function manageRestaurants(
  state = { restaurants: [], reviews: [] },
  action
) {
  switch (action.type) {
    case "ADD_RESTAURANT":
      return {
        restaurants: [
          ...state.restaurants,
          { text: action.payload, id: cuid() }
        ],
        reviews: [...state.reviews]
      };
    case "DELETE_RESTAURANT":
      const rIndex = state.restaurants.findIndex(el => {
        return el.id === action.id;
      });
      return {
        restaurants: [
          ...state.restaurants.slice(0, rIndex),
          ...state.restaurants.slice(rIndex + 1)
        ],
        reviews: [...state.reviews]
      };
    case "ADD_REVIEW":
      return {
        restaurants: [...state.restaurants],
        reviews: [
          ...state.reviews,
          {
            text: action.payload.text,
            id: cuid(),
            restaurantId: action.payload.restaurantId
          }
        ]
      };
    case "DELETE_REVIEW":
      const cIndex = state.reviews.findIndex(el => {
        return el.id === action.id;
      });
      return {
        restaurants: [...state.restaurants],
        reviews: [
          ...state.reviews.slice(0, cIndex),
          ...state.reviews.slice(cIndex + 1)
        ]
      };

    default:
      return state;
  }
}
