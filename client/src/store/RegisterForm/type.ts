export interface RegisterState {
  identityCard: string;
  email: string;
  fullName: string;
  address: string;
  password: string;
  dateOfBirth: string;
  phoneNumber: string;
  display: boolean;
}

export const SET_IDENTITYCARD_REGISTER = "SET_IDENTITYCARD_REGISTER";
export const SET_PASSWORD_REGISTER = "SET_PASSWORD_REGISTER";
export const SET_EMAIL_REGISTER = "SET_EMAIL_REGISTER";
export const SET_FULLNAME_REGISTER = "SET_FULLNAME_REGISTER";
export const SET_ADDRESS_REGISTER = "SET_ADDRESS_REGISTER";
export const SET_DATEOFBIRTH_REGISTER = "SET_DATEOFBIRTH_REGISTER";
export const SET_PHONENUMBER_REGISTER = "SET_PHONENUMBER_REGISTER";
export const SET_DISPLAY_REGISTER = "SET_DISPLAY_REGISTER";

interface setIdentityCard {
  type: typeof SET_IDENTITYCARD_REGISTER;
  payload: string;
}

interface setPassword {
  type: typeof SET_PASSWORD_REGISTER;
  payload: string;
}

interface setEmailRegister {
  type: typeof SET_EMAIL_REGISTER;
  payload: string;
}

interface setFullnameRegister {
  type: typeof SET_FULLNAME_REGISTER;
  payload: string;
}

interface setDateofBirthRegister {
  type: typeof SET_DATEOFBIRTH_REGISTER;
  payload: string;
}

interface setPhoneNumberRegister{
  type: typeof SET_PHONENUMBER_REGISTER;
  payload: string;
}

interface setDisplay {
  type: typeof SET_DISPLAY_REGISTER;
  payload: boolean;
}

interface setAddress {
  type: typeof SET_ADDRESS_REGISTER;
  payload: string;
}

export type RegisterActionTypes = 
  | setIdentityCard 
  | setAddress
  | setPassword 
  | setEmailRegister
  | setFullnameRegister
  | setDateofBirthRegister
  | setPhoneNumberRegister
  | setDisplay;
