import axios from "axios";
import * as config__ from './../config';
const GETALL: string = config__.ADMINURLALL;
const DELETE: string = config__.ADMINURL;
const UPDATE: string = config__.ADMINURL;
const ADDSHIFTTODOCTOR: string = config__.ADMINADDSHIFT;
const ADMIN:string = config__.ADMIN;
export default class AdminAPI {

  getAll = (token: string, response: any, error: any) => {
    axios.get(GETALL, { headers: { Authorization: token } })
      .then(response)
      .catch(error);
  };
  getList = (token: string,params:string, response: any, error: any) => {
    axios.get(GETALL+params, { headers: { Authorization: token } })
      .then(response)
      .catch(error);
  };
  activeDoctor = (token:string,id:string,response:any,error:any) =>{
    // axios.put(ROOM + id,{},{headers:{Authorization: token}})
    axios({
      method:'PUT',
      url:ADMIN + id,
      headers: {
        Authorization: token
      }
    })
    .then(response)
    .catch(error)
  }
  deleteUser = (token: string, idUser: string, response: any, error: any) => {
    axios({
      method: 'DELETE',
      url: DELETE + idUser,
      headers: {
        Authorization: token
      }
    }
    )
      .then(response)
      .catch(error);
  };

  updateUser = (token: string, idUser: string, formData: FormData, response: any, error: any) => {
    const data = {
      "email": formData.get("email")
    }
    axios.put(UPDATE + idUser, data, { headers: { Authorization: token } })
      .then(response)
      .catch(error);
  };

  addShiftToDoctor = (token: string, idDoctor: string, formData: FormData, response: any, error: any) => {
    const data = {
      "idShift": formData.get("idShift")
    }
    axios.post(ADDSHIFTTODOCTOR + idDoctor, data, { headers: { Authorization: token } })
      .then(response)
      .catch(error);
  };
}
