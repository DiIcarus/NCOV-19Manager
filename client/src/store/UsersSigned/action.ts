import {
  SET_ADDRESS_USERSSIGNED,
  SET_AVATAR_USERSSIGNED,
  SET_DATEOFBIRTH_USERSSIGNED,
  SET_EMAIL_USERSSIGNED,
  SET_FULLNAME_USERSSIGNED,
  SET_GENDER_USERSSIGNED,
  SET_GPS_USERSSIGNED,
  SET_IDENTITYCARD_USERSSIGNED,
  SET_IDROLE_USERSSIGNED,
  SET_ID_USERSSIGNED,
  SET_ISACTIVE_USERSSIGNED,
  SET_PASSWORD_USERSSIGNED,
  SET_PHONENUMBER_USERSSIGNED,
  SET_V_USERSSIGNED,
  SET_TOKEN_USERSSIGNED,
  idRole,
} from "./type";

export function setAvatarUserssigned(file: string[]) {
  return {
    type: SET_AVATAR_USERSSIGNED,
    payload: file,
  };
}

export function setGenderUserssigned(gender: string) {
  return {
    type: SET_GENDER_USERSSIGNED,
    payload: gender,
  };
}

export function setIsActiveUserssigned(status: boolean) {
  return {
    type: SET_ISACTIVE_USERSSIGNED,
    payload: status,
  };
}

export function setGPS(gps: string[]) {
  return {
    type: SET_GPS_USERSSIGNED,
    payload: gps,
  };
}

export function setIdRoveUserssigned(idRole: idRole) {
  return {
    type: SET_IDROLE_USERSSIGNED,
    payload: idRole,
  };
}

export function setIdUserssigned(id: string) {
  return {
    type: SET_ID_USERSSIGNED,
    payload: id,
  };
}

export function setFullnameUserssigned(name: string) {
  return {
    type: SET_FULLNAME_USERSSIGNED,
    payload: name,
  };
}

export function setmailUserssigned(mail: string) {
  return {
    type: SET_EMAIL_USERSSIGNED,
    payload: mail,
  };
}

export function setIdentityCardUserssigned(code: string) {
  return {
    type: SET_IDENTITYCARD_USERSSIGNED,
    payload: code,
  };
}

export function setPasswordUserssigned(pws: string) {
  return {
    type: SET_PASSWORD_USERSSIGNED,
    payload: pws,
  };
}

export function setPhonenumberUserssigned(numbar: string) {
  return {
    type: SET_PHONENUMBER_USERSSIGNED,
    payload: numbar,
  };
}

export function setDateofbirthUserssigned(dob: string) {
  return {
    type: SET_DATEOFBIRTH_USERSSIGNED,
    payload: dob,
  };
}

export function setAddressUserssigned(addr: string) {
  return {
    type: SET_ADDRESS_USERSSIGNED,
    payload: addr,
  };
}

export function setVUserssigned(v: string) {
  return {
    type: SET_V_USERSSIGNED,
    payload: v,
  };
}

export function setTokenUserssigned(token: string) {
  return {
    type: SET_TOKEN_USERSSIGNED,
    payload: token,
  };
}
