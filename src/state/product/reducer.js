const initialState = {
  products: [],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case 'GET_PRODUCTS_SUCCESS': {
      return {
        ...state,
        products: action.data,
      };
    }
    default: {
      return state;
    }
  }
}
