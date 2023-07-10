const initialState = {
  selectedBoolean: true,
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_VISIBILITY_ACTIONS":
      return {
        ...state,
        selectedBoolean: false,
      };
    default:
      return state;
  }
};
