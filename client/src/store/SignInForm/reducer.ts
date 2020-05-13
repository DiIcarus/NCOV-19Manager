import {
  SignInState,
  SET_IDENTITYCARD_SIGNIN,
  SET_PASSWORD_SIGNIN,
  SET_DISPLAY_SIGNIN,
  SignInActionTypes,
} from "./type";

const initState: SignInState = Object.freeze({
  identityCard: "" as string,
  password: "" as string,
  display: true,
});

export function SignInReducer(
  previousState = initState,
  action: SignInActionTypes
): SignInState {
  switch (action.type) {
    case SET_IDENTITYCARD_SIGNIN:
      return {
        identityCard: action.payload,
        password: previousState.password,
        display: previousState.display,
      };
    case SET_PASSWORD_SIGNIN:
      return {
        identityCard: previousState.identityCard,
        password: action.payload,
        display: previousState.display,
      };
    case SET_DISPLAY_SIGNIN:
      return {
        identityCard: previousState.identityCard,
        password: previousState.password,
        display: action.payload,
      };
    default:
      return previousState;
  }
}
