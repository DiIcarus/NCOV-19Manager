import {SET_CHECKTYPESTATUS_CHECKER ,SET_REALLY2CHECKSTATUS_CHECKER } from './type';

export function setCheckTypeStatusChecker(e: React.ChangeEvent<HTMLInputElement>){
    return {
        type:SET_CHECKTYPESTATUS_CHECKER,
        payload: e
    };
}

export function setReally2CheckStatusChecker(status:boolean){
    return {
        type:SET_REALLY2CHECKSTATUS_CHECKER,
        payload: status
    };
}