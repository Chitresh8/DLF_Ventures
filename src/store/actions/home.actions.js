export const setDataActions = (el) => {
  return (dispatch) => {
    dispatch({ type: "SET_DATA_ACTIONS", payload: el });
  };
};

export const setEmailActions = (event) => {
  return (dispatch) => {
    dispatch({ type: "SET_EMAIL_ACTIONS", payload: event });
  };
};

export const setFusionUserActions = (event) => {
  return (dispatch) => {
    dispatch({ type: "SET_FUSION_USER_ACTIONS", payload: event });
  };
};

export const setInputActions = (event) => {
  return (dispatch) => {
    dispatch({ type: "SET_INPUT_ACTIONS", payload: event });
  };
};

export const setMobileUserActions = (event) => {
  return (dispatch) => {
    dispatch({ type: "SET_MOBILE_USER_ACTIONS", payload: event });
  };
};

export const setSearchActions = (el) => {
  return (dispatch) => {
    console.log("homeActions", el);
    dispatch({ type: "SET_SEARCH_ACTIONS", payload: el });
  };
};

export const setResetActions = () => {
  return (dispatch) => {
    dispatch({ type: "SET_RESET_ACTIONS", payload: "" });
  };
};

export const setResetTwoActions = (el) => {
  return (dispatch) => {
    dispatch({ type: "SET_RESET_TWO_ACTIONS", payload: el });
  };
};
