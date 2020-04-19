import {
  SET_CAMACTIVE_CAM,
  SET_CAPTURECAMACTIVE_CAM,
  SET_FILEARRAY_CAM,
} from "./type";

export function setCaptureCamActiveCam(captured: boolean, camActive: boolean) {
  return {
    type: SET_CAPTURECAMACTIVE_CAM,
    meta: {
      captured,
      camActive,
    },
  };
}

export function setCamActiveCam(status: boolean) {
  return {
    type: SET_CAMACTIVE_CAM,
    payload: status,
  };
}

export function setFileArrayCam(filearray: string[]) {
  return {
    type: SET_FILEARRAY_CAM,
    payload: filearray,
  };
}
