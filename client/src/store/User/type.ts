export interface UsersState {
    full_name: string;
    avatar : File[];
    token: string;
    dayofbirth: string;
    gmail: string;
}

export const SET_FULLNAME_USERS = 'SET_FULLNAME_USERS';
export const SET_AVATAR_USERS = 'SET_AVATAR_USERS';
export const SET_TOKEN_USERS = 'SET_TOKEN_USERS';
export const SET_DAYOFBIRTH_USERS = 'SET_REALLY2CHECKSTATUS_CHECKER';
export const SET_GMAIL_USERS = 'SET_CHECKTYPESTATUS_CHECKER';

interface setFullName {
    type: typeof SET_FULLNAME_USERS;
    payload: string;
}

interface setAvatar {
    type: typeof SET_AVATAR_USERS;
    payload: File[];
}

interface setToken {
    type: typeof SET_TOKEN_USERS;
    payload: string;
}

interface setDayofbirth {
    type: typeof SET_DAYOFBIRTH_USERS;
    payload: string;
}

interface setGmail {
    type: typeof SET_GMAIL_USERS;
    payload: string;
}

export type UsersTypes = 
    | setFullName 
    | setAvatar
    | setToken
    | setDayofbirth
    | setGmail;