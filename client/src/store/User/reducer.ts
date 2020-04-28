import { 
  UsersState,
  UsersTypes,
  SET_AVATAR_USERS,
  SET_DAYOFBIRTH_USERS,
  SET_FULLNAME_USERS,
  SET_GMAIL_USERS,
  SET_TOKEN_USERS
} from './type';

const initState: UsersState = Object.freeze({
  full_name: "" as string,
  avatar: [] as File[],
  token: "" as string,
  dayofbirth: "" as string,
  gmail: "" as string
})

export function UsersReducer(
  previousState = initState,
  action: UsersTypes
): UsersState {
  switch (action.type) {
    case SET_AVATAR_USERS:
      return {
        avatar: action.payload,
        ...previousState
      };
    case SET_DAYOFBIRTH_USERS:
      return {
        ...previousState,
        dayofbirth:action.payload 
      };
    case SET_FULLNAME_USERS:
      return {
        full_name:action.payload,
        ...previousState
      };
    case SET_GMAIL_USERS:
      return {
        ...previousState,
        gmail:action.payload
      };
    case SET_TOKEN_USERS:
      return {
        token: action.payload,
        ...previousState
      };
    default:
      return previousState;
  }
}