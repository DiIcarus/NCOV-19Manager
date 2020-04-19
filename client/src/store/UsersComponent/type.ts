export interface DataCheckerState {
    checkType: "file" | "url" | "camera";
    ready2Check: boolean;
}

export const SET_CHECKTYPESTATUS_CHECKER = 'SET_CHECKTYPESTATUS_CHECKER';
export const SET_REALLY2CHECKSTATUS_CHECKER = 'SET_REALLY2CHECKSTATUS_CHECKER';


interface ActionHandleChangeType {
    type: typeof SET_CHECKTYPESTATUS_CHECKER;
    payload: React.ChangeEvent<HTMLInputElement>;
}

interface setCheckStatus {
    type: typeof SET_REALLY2CHECKSTATUS_CHECKER;
    payload: boolean;
}


export type CheckerActionTypes = ActionHandleChangeType | setCheckStatus;