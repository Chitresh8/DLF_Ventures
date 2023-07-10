const initialState = {
  selectedUserDetailsData: [],
};

export const userDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER_DETAILS_ACTIONS":
      return { ...state, selectedUserDetailsData: action.payload };
    default:
      return state;
  }
};
