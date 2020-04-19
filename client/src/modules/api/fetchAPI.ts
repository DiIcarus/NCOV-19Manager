import axios from "axios";

// const VALUEAUTH: string = "4f679198-ccb9-4607-8bed-88ef0f6b3fab";

// const USERS: string = "/users";
// const CHECKINIMAGE: string = "/checkin/image";
const DOCTOR_REGISTER: string = "/api/doctor/register";
const DOCTOR_SIGNIN:string= "/api/user/login"
export default class APIDemo {

  userRegister = (formData:any, response: any, error: any) => {
    const data = {
      'address':formData.get('address'),
      'password':formData.get('password'),
      'phoneNumber': formData.get('phoneNumber'),
      'dateOfBirth': formData.get('dateOfBirth'),
      'identityCard': formData.get('identityCard'),
      'fullName': formData.get('fullName'),
      'email': formData.get('email'),
    }
    axios.post(DOCTOR_REGISTER,data)
      .then(response)
      .catch(error);
  };

  userLogin = (formData: any, response: any, error: any) => {
    const data = {
      "identityCard":formData.get("identityCard"),
      "password":formData.get("password")
    }
    axios.post(DOCTOR_SIGNIN,data)
      .then(response)
      .catch(error);
  };
}

// fetchAPIDeleteUser = (id:string,formData: any,response:any,error:any) => {
//   axios({
//       method: 'DELETE',
//       url: USERS+`/${id}`,
//       data: formData,
//       headers:{
//               'x-API-key':VALUEAUTH
//           }
//       }
//   )
//   .then(response)
//   .catch(error)
// }
