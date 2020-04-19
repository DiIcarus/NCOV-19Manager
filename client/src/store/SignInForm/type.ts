export interface SignInState {
  identityCard: string;
  password: string;
  display: boolean;
}

export const SET_IDENTITYCARD_SIGNIN = "SET_IDENTITYCARD_SIGNIN";
export const SET_PASSWORD_SIGNIN = "SET_PASSWORD_SIGNIN";
export const SET_DISPLAY_SIGNIN = "SET_DISPLAY_SIGNIN";

interface setIdentityCard {
  type: typeof SET_IDENTITYCARD_SIGNIN;
  payload: string;
}

interface setPassword {
  type: typeof SET_PASSWORD_SIGNIN;
  payload: string;
}

interface setDisplay {
  type: typeof SET_DISPLAY_SIGNIN;
  payload: boolean;
}

export type SignInActionTypes = setIdentityCard | setPassword | setDisplay;
