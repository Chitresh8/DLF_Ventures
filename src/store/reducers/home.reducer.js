const initialState = {
  apiData: [],
  selectedData: [],
  selectedFusion: [],
  mobileUserNameInput: "",
  emailInput: "",
  fusionUserInput: "",
  selectedEvent: [],
  selectedReset: "",
  selectedResetTwo: [],
};

export const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_DATA_ACTIONS":
      return {
        ...state,
        selectedData: action.payload,
        apiData: action.payload,
      };
    case "SET_FUSION_ACTIONS":
      return { ...state, selectedFusion: action.payload };
    case "SET_INPUT_ACTIONS":
      return { ...state, selectedEvent: action.payload };
    case "SET_MOBILE_USER_ACTIONS":
      return {
        ...state,
        mobileUserNameInput: action.payload,
      };
    case "SET_EMAIL_ACTIONS":
      return {
        ...state,
        emailInput: action.payload,
      };
    case "SET_FUSION_USER_ACTIONS":
      return {
        ...state,
        fusionUserInput: action.payload,
      };
    case "SET_SEARCH_ACTIONS":
      console.log("searchDataAction", action.payload);
      return { ...state, selectedData: action.payload };
    case "SET_RESET_ACTIONS":
      return { ...state, selectedReset: action.payload };
    case "SET_RESET_TWO_ACTIONS":
      return { ...state, selectedResetTwo: action.payload };
    default:
      return state;
  }
};
