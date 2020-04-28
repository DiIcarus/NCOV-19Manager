import {
    SET_AVATAR_USERS,
    SET_DAYOFBIRTH_USERS,
    SET_FULLNAME_USERS,
    SET_GMAIL_USERS,
    SET_TOKEN_USERS
} from './type';

export function setAvatarUsers(file: File[]){
    return {
        type:SET_AVATAR_USERS,
        payload: file
    };
}

export function setDateofbirthUsers(dob:string){
    return {
        type:SET_DAYOFBIRTH_USERS,
        payload: dob
    };
}

export function setFullnameUsers(fname: string){
    return {
        type:SET_FULLNAME_USERS,
        payload: fname
    };
}

export function setGmailUsers(gmail:string){
    return {
        type:SET_GMAIL_USERS,
        payload: gmail
    };
}

export function setTokenUsers(token: string){
    return {
        type:SET_TOKEN_USERS,
        payload: token
    };
}