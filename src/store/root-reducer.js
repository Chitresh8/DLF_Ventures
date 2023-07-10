// import { applyMiddleware, combineReducers, createStore } from "redux";
// import thunk from "redux-thunk";
// import { dataReducer } from "./reducers/data.reducer";

// const rootReducer = combineReducers({
//   data: dataReducer,
// });

// export const store = createStore(rootReducer, applyMiddleware(thunk));

import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { homeReducer } from "./reducers/home.reducer";
import { userDetailsReducer } from "./reducers/userdetails.reducer";
import { loginReducer } from "./reducers/login.reducer";

const rootReducer = combineReducers({
  home: homeReducer,
  user: userDetailsReducer,
  login: loginReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
