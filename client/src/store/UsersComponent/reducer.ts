import {DataCheckerState,SET_CHECKTYPESTATUS_CHECKER,SET_REALLY2CHECKSTATUS_CHECKER,CheckerActionTypes} from './type';

const initState:DataCheckerState = Object.freeze({
  checkType: "url" as "file" | "url" | "camera",
  ready2Check: false
})

export function dataCheckerReducer(
  previousState = initState,
  action:CheckerActionTypes
):DataCheckerState{
  switch (action.type) {
    case SET_CHECKTYPESTATUS_CHECKER:
      return {
        checkType: action.payload.target.value as "file" | "url" | "camera" ,
        ready2Check: previousState.ready2Check
      };
    case SET_REALLY2CHECKSTATUS_CHECKER:
      return{
        checkType: previousState.checkType ,
        ready2Check: action.payload as boolean
      };
    default:
      return previousState;
  }
}