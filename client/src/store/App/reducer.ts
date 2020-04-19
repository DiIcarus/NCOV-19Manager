import {AppState,EXPANDED,AppActionType} from './type';

const initState:AppState = Object.freeze({
  expanded: 'check'
})

export function appReducer(
  previousState = initState,
  action:AppActionType
):AppState{
  switch (action.type) {
    case EXPANDED:
      return {
        expanded: action.payload
      };
    default:
      return previousState;
  }
}