import {
  UserssignedState,
  UserssignedTypes,
  SET_AVATAR_USERSSIGNED,
  SET_GENDER_USERSSIGNED,
  SET_ISACTIVE_USERSSIGNED,
  SET_GPS_USERSSIGNED,
  SET_IDROLE_USERSSIGNED,
  SET_ID_USERSSIGNED,
  SET_FULLNAME_USERSSIGNED,
  SET_EMAIL_USERSSIGNED,
  SET_IDENTITYCARD_USERSSIGNED,
  SET_PASSWORD_USERSSIGNED,
  SET_PHONENUMBER_USERSSIGNED,
  SET_DATEOFBIRTH_USERSSIGNED,
  SET_ADDRESS_USERSSIGNED,
  SET_V_USERSSIGNED,
  SET_TOKEN_USERSSIGNED,
} from "./type";

const initState: UserssignedState = Object.freeze({
  avatar: [] as string[],
  gender: "" as string,
  isActive: false as boolean,
  gps: [] as string[],
  idRole: {
    __id: "",
    name: "",
    __v: "",
  },
  _id: "" as string,
  fullName: "" as string,
  email: "" as string,
  identityCard: "" as string,
  password: "" as string,
  phoneNumber: "" as string,
  dateOfBirth: "" as string,
  address: "" as string,
  __v: "" as string,
  token: "" as string,
});

export function UserssignedReducer(
  previousState = initState,
  action: UserssignedTypes
): UserssignedState {
  switch (action.type) {
    case SET_AVATAR_USERSSIGNED:
      return {
        ...previousState,
        avatar: action.payload,
      };
    case SET_GENDER_USERSSIGNED:
      return {
        ...previousState,
        gender: action.payload,
      };
    case SET_ISACTIVE_USERSSIGNED:
      return {
        ...previousState,
        isActive: action.payload,
      };
    case SET_GPS_USERSSIGNED:
      return {
        ...previousState,
        gps: action.payload,
      };
    case SET_IDROLE_USERSSIGNED:
      return {
        ...previousState,
        idRole: action.payload,
      };
    case SET_ID_USERSSIGNED:
      return {
        ...previousState,
        _id: action.payload,
      };
    case SET_FULLNAME_USERSSIGNED:
      return {
        ...previousState,
        fullName: action.payload,
      };
    case SET_EMAIL_USERSSIGNED:
      return {
        ...previousState,
        email: action.payload,
      };
    case SET_IDENTITYCARD_USERSSIGNED:
      return {
        ...previousState,
        identityCard: action.payload,
      };
    case SET_PASSWORD_USERSSIGNED:
      return {
        
        ...previousState,
        password: action.payload,
      };
    case SET_PHONENUMBER_USERSSIGNED:
      return {
        ...previousState,
        phoneNumber: action.payload,
      };
    case SET_DATEOFBIRTH_USERSSIGNED:
      return {
        ...previousState,
        dateOfBirth: action.payload,
      };
    case SET_ADDRESS_USERSSIGNED:
      return {
        ...previousState,
        address: action.payload,
      };
    case SET_V_USERSSIGNED:
      return {
        ...previousState,
        __v: action.payload,
      };
    case SET_TOKEN_USERSSIGNED:
      return {
        ...previousState,
        token: action.payload,
      };
    default:
      return previousState;
  }
}
