import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { combineReducers } from "redux";

//reducer import
import {appReducer} from './App/reducer';
import {SignInReducer} from './SignInForm/reducer';
import {RegisterReducer} from './RegisterForm/reducer';
//combine reducer
const rootReducer = combineReducers({
  AppState:appReducer,
  SignInState:SignInReducer,
  RegisterState:RegisterReducer
});

export type MainState = ReturnType<typeof rootReducer>;

const middlewares = [thunk];
const middleWareEnhancer = applyMiddleware(...middlewares);
const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(middleWareEnhancer)
);
store.subscribe(() => {});
export default store;
