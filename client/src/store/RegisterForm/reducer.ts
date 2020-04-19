import {
  RegisterState,
  SET_ADDRESS_REGISTER,
  SET_EMAIL_REGISTER,
  SET_IDENTITYCARD_REGISTER,
  SET_PASSWORD_REGISTER,
  SET_FULLNAME_REGISTER,
  SET_PHONENUMBER_REGISTER,
  SET_DISPLAY_REGISTER,
  SET_DATEOFBIRTH_REGISTER,
  RegisterActionTypes,
} from "./type";

const initState: RegisterState = Object.freeze({
  identityCard: "",
  email: "",
  fullName: "",
  address: "",
  password: "",
  dateOfBirth: "",
  phoneNumber: "",
  display: true,
});

export function RegisterReducer(
  previousState = initState,
  action: RegisterActionTypes
): RegisterState {
  switch (action.type) {
    case SET_ADDRESS_REGISTER:
      return {
        ...previousState,
        address: action.payload
      };
    case SET_EMAIL_REGISTER:
      return {
        ...previousState,
        email: action.payload
      };
    case SET_IDENTITYCARD_REGISTER:
      return {
        ...previousState,
        identityCard: action.payload
      };
    case SET_PASSWORD_REGISTER:
      return {
        ...previousState,
        password: action.payload
      };
    case SET_FULLNAME_REGISTER:
      return {
        ...previousState,
        fullName: action.payload
      };
    case SET_PHONENUMBER_REGISTER:
      return {
        ...previousState,
        phoneNumber: action.payload
      };
    case SET_DATEOFBIRTH_REGISTER:
      return {
        ...previousState,
        dateOfBirth: action.payload
      };
    case SET_DISPLAY_REGISTER:
      return {
        ...previousState,
        display: action.payload
      };
    default:
      return previousState;
  }
}
