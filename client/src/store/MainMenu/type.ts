export interface CameraCaptureState {
    captured:boolean,
    camActive: boolean,
    fileArray: string[],
}

export const SET_CAPTURECAMACTIVE_CAM = 'SET_CAPTURECAMACTIVE_CAM';
export const SET_CAMACTIVE_CAM = 'SET_CAMACTIVE_CAM';
export const SET_FILEARRAY_CAM = 'SET_FILEARRAY_CAM';


interface setCaptureCamactiveCam {
    type: typeof SET_CAPTURECAMACTIVE_CAM;
    meta:{
        captured:boolean,
        camActive:boolean
    }
}

interface setCaptureCam {
    type: typeof SET_CAMACTIVE_CAM;
    payload: boolean;
}

interface setFileArrayCam {
    type: typeof SET_FILEARRAY_CAM;
    payload: string[];
}



export type CheckerActionTypes = setCaptureCamactiveCam | setCaptureCam | setFileArrayCam;