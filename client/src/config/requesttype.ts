
export interface RoomRequest {
    updateCurrentNumber: string,
    insertMaxNumber: string,
    insertAddress: string,
    insertName: string,
    getallpage: string,
    getalltypesort: string,
    getallsearch: string
}

export interface ShiftRequest {
    updatestartTime: string,
    insertstartTime: string,
    insertendTime: string,
    getallpage: string,
    getalltypesort: string,
    getallsearch: string
}

export interface DoctorRequest {
    insertaddress: string,
    insertpassword: string,
    insertphonenumber: string,
    insertdayofbirth: string,
    insertidentitycard: string,
    insertfullname: string,
    insertemail: string,
    insertgender: string,
    getallpage: string,
    getalltypesort: string,
    getallsearch: string,
    addPatientToRoomidRoom: string
}

export interface UserRequest {
    updatenewPassword: string,
    updateagainNewPassword: string
}

export interface AdminRequest {
    updateemail: string,
    addshiftidShift: string
}