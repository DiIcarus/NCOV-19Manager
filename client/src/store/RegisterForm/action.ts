import {
    SET_ADDRESS_REGISTER
    ,SET_DATEOFBIRTH_REGISTER
    ,SET_DISPLAY_REGISTER
    ,SET_PHONENUMBER_REGISTER
    ,SET_FULLNAME_REGISTER
    ,SET_PASSWORD_REGISTER
    ,SET_IDENTITYCARD_REGISTER
    ,SET_EMAIL_REGISTER
} from './type';

export function setAddressRegister(addr:string){
    return {
        type:SET_ADDRESS_REGISTER,
        payload: addr
    };
}

export function setDateOfBirthRegister(DoB:string){
    return {
        type:SET_DATEOFBIRTH_REGISTER,
        payload: DoB
    };
}

export function setNumberRegister(phone:string){
    return {
        type:SET_PHONENUMBER_REGISTER,
        payload: phone
    };
}

export function setFullnameRegister(fullname:string){
    return {
        type:SET_FULLNAME_REGISTER,
        payload: fullname
    };
}

export function setPasswordRegister(pws:string){
    return {
        type:SET_PASSWORD_REGISTER,
        payload: pws
    };
}

export function setIdentityCardRegister(indentity:string){
    return {
        type:SET_IDENTITYCARD_REGISTER,
        payload: indentity
    };
}

export function setEmailRegister(email:string){
    return {
        type:SET_EMAIL_REGISTER,
        payload: email
    };
}

export function setDisplaySignIn(status:boolean){
    return {
        type:SET_DISPLAY_REGISTER,
        payload: status
    };
}