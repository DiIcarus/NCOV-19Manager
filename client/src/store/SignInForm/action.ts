import {SET_IDENTITYCARD_SIGNIN ,SET_PASSWORD_SIGNIN ,SET_DISPLAY_SIGNIN } from './type';

export function setIdentityCardSignIn(identity:string){
    return {
        type:SET_IDENTITYCARD_SIGNIN,
        payload: identity
    };
}

export function setPasswordSignIn(password:string){
    return {
        type:SET_PASSWORD_SIGNIN,
        payload: password
    };
}

export function setDisplaySignIn(status:boolean){
    return {
        type:SET_DISPLAY_SIGNIN,
        payload: status
    };
}