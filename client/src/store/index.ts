import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { combineReducers } from "redux";

//reducer import
// import {appReducer} from './App/reducer';
import {SignInReducer} from './SignInForm/reducer';
import {RegisterReducer} from './RegisterForm/reducer';
import {UsersReducer} from './User/reducer';
import {UserssignedReducer} from './UsersSigned/reducer';
//combine reducer
const rootReducer = combineReducers({
  UserssignedState:UserssignedReducer,
  SignInState:SignInReducer,
  RegisterState:RegisterReducer,
  UsersState:UsersReducer
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
