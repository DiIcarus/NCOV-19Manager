import axios from "axios";
import * as config__ from "./../config";

const USER_SIGNIN: string = config__.USERLOGIN;
const UPLOAD_AVT: string = config__.USERAVT;
const GET_PROFILE: string = config__.USERGETPROFILE;
const USER_CHANGEPASSWORD:string = config__.USERCHANGEPWS;
export default class UserAPI {

  uploadAvatar = (token: string, formData: any, response: any, error: any) => {
    axios.post(UPLOAD_AVT, formData, { headers: { Authorization: token } })
      .then(response)
      .catch(error);
  };

  userLogin = (formData: any, response: any, error: any) => {
    const data = {
      "identityCard": formData.get("identityCard"),
      "password": formData.get("password")
    }
    axios.post(USER_SIGNIN, data)
      .then(response)
      .catch(error);
  };

  getProfile = (token: string, response: any, error: any) => {
    axios.get(GET_PROFILE, { headers: { Authorization: token } })
      .then(response)
      .catch(error);
  };

  changePassword = (token: string, formData: any, response: any, error: any) => {
    const data = {
      "newPassword": formData.get("newPassword"),
      "againNewPassword": formData.get("againNewPassword")
    }
    axios.put(USER_CHANGEPASSWORD, data, { headers: { Authorization: token } })
      .then(response)
      .catch(error);
  };

}
