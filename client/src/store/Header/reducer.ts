import {
  CameraCaptureState,
  SET_CAMACTIVE_CAM,
  SET_CAPTURECAMACTIVE_CAM,
  SET_FILEARRAY_CAM,
  CheckerActionTypes,
} from "./type";

const initState: CameraCaptureState = Object.freeze({
  captured: false as boolean,
  camActive: false as boolean,
  fileArray: [] as string[],
});

export function CameraCaptureReducer(
  previousState = initState,
  action: CheckerActionTypes
): CameraCaptureState {
  switch (action.type) {
    case SET_CAMACTIVE_CAM:
      return {
        captured: previousState.camActive,
        camActive: action.payload,
        fileArray: previousState.fileArray,
      };
    case SET_CAPTURECAMACTIVE_CAM:
      return {
        captured: action.meta.captured,
        camActive: action.meta.camActive,
        fileArray: previousState.fileArray,
      };
    case SET_FILEARRAY_CAM:
      return {
        captured: previousState.captured,
        camActive: previousState.camActive,
        fileArray: action.payload,
      };
    default:
      return previousState;
  }
}
