export const setUserDetailsActions = (el) => {
  return (dispatch) => {
    dispatch({ type: "SET_USER_DETAILS_ACTIONS", payload: el });
  };
};
