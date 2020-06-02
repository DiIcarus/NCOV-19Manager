// export const HOT_LINE_PHONE:string = "Hot line: 0942214074";

// export interface RegisterPatient {
//     address:string,
//     password: string,
//     phoneNumber: string,
//     dateOfBirth: string,
//     identityCard: string,
//     fullName: string,
//     email:string,
//     gender:number
// }
// "proxy": "http://:6666",
const host:string = "192.168.1.4";
// const host:string = "207.148.71.252";
const port:string = "3000";
const myHost=() => {
  return "http://"+host+ ":" + port;
}
export const HOST:string= myHost();
export const ADMIN: string = myHost() + "/api/admin/active-doctor/";
export const ADMINURL:string = myHost()+ "/api/admin";
export const ADMINURLALL:string = myHost()+"/api/admin/all";
export const ADMINADDSHIFT:string = myHost()+"/api/admin/add-doctor-to-shift/";

export const USERLOGIN:string = myHost()+"/api/user/login";
export const USERAVT:string = myHost()+"/api/user/upload-avatars";
export const USERGETPROFILE:string = myHost()+"/api/user/";
export const USERCHANGEPWS:string = myHost()+"/api/user/change-password";

export const SHIFT:string = myHost()+"/api/shift/";

export const ROOM:string = myHost()+"/api/room/";
export const DIEMDANH:string = myHost()+"/api/diemDanh";

export const DOCTORREGISTER:string = myHost()+"/api/doctor/register";
export const DOCTORSIGNIN:string = myHost()+"/api/user/login";
export const DOCTORREGISTERPATIENT:string = myHost()+"/api/doctor/register-patient";
export const DOCTORGETLISTPATIENT:string = myHost()+"/api/doctor/all-patient";
export const DOCTORADDPATIENTTOROOM:string = myHost()+"/api/doctor/add-patient-to-room";