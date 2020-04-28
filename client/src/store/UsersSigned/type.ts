import * as api__ from "../../config/apireturntype";
export type idRole = typeof idrole

const idrole = {
    __id:'' as string,
    name: '' as string,
    __v: '' as string
}

export interface UserssignedState {
    avatar : File[];
    gender :string;
    isActive: boolean;
    gps: string[];
    idRole : typeof idrole;
    _id: string;
    fullName: string;
    email: string;
    identityCard: string;
    password: string;
    phoneNumber: string;
    dateOfBirth: string;
    address: string;
    __v: string;
}

export const SET_AVATAR_USERSSIGNED = 'SET_AVATAR_USERSSIGNED';
export const SET_GENDER_USERSSIGNED = 'SET_GENDER_USERSSIGNED';
export const SET_ISACTIVE_USERSSIGNED = 'SET_ISACTIVE_USERSSIGNED';
export const SET_GPS_USERSSIGNED= 'SET_GPS_USERSSIGNED';
export const SET_IDROLE_USERSSIGNED = 'SET_IDROLE_USERSSIGNED';
export const SET_ID_USERSSIGNED = 'SET_FULLNAME_USERS';
export const SET_FULLNAME_USERSSIGNED = 'SET_FULLNAME_USERSSIGNED';
export const SET_EMAIL_USERSSIGNED = 'SET_EMAIL_USERSSIGNED';
export const SET_IDENTITYCARD_USERSSIGNED = 'SET_REALLY2CHECKSTATUS_CHECKER';
export const SET_PASSWORD_USERSSIGNED = 'SET_PASSWORD_USERSSIGNED';
export const SET_PHONENUMBER_USERSSIGNED = 'SET_PHONENUMBER_USERSSIGNED';
export const SET_DATEOFBIRTH_USERSSIGNED = 'SET_DATEOFBIRTH_USERSSIGNED';
export const SET_ADDRESS_USERSSIGNED = 'SET_ADDRESS_USERSSIGNED';
export const SET_V_USERSSIGNED = 'SET_V_USERSSIGNED';



interface setAvatar {
    type: typeof SET_AVATAR_USERSSIGNED;
    payload: File[];
}

interface setGender {
    type: typeof SET_GENDER_USERSSIGNED;
    payload: string;
}

interface setIsActive {
    type: typeof SET_ISACTIVE_USERSSIGNED;
    payload: boolean;
}

interface setGPS {
    type: typeof SET_GPS_USERSSIGNED;
    payload: string[];
}

interface setIdrole {
    type: typeof SET_IDROLE_USERSSIGNED;
    payload: typeof idrole;
}

interface setId {
    type: typeof SET_ID_USERSSIGNED;
    payload: string;
}

interface setFullname {
    type: typeof SET_FULLNAME_USERSSIGNED;
    payload: string;
}

interface setEmail {
    type: typeof SET_EMAIL_USERSSIGNED;
    payload: string;
}

interface setIdentityCard {
    type: typeof SET_IDENTITYCARD_USERSSIGNED;
    payload: string;
}

interface setPassword {
    type: typeof SET_PASSWORD_USERSSIGNED;
    payload: string;
}

interface setPhoneNumber {
    type: typeof SET_PHONENUMBER_USERSSIGNED;
    payload: string;
}

interface setDateOfBirth {
    type: typeof SET_DATEOFBIRTH_USERSSIGNED;
    payload: string;
}

interface setAddress {
    type: typeof SET_ADDRESS_USERSSIGNED;
    payload: string;
}

interface setV {
    type: typeof SET_V_USERSSIGNED;
    payload: string;
}

export type UserssignedTypes = 
    | setAvatar
    | setGender
    | setIsActive
    | setGPS
    | setId
    | setAddress
    | setPassword
    | setPhoneNumber
    | setDateOfBirth
    | setIdentityCard
    | setFullname
    | setEmail
    | setIdrole
    | setV
    ;