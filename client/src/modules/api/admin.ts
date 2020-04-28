import axios from "axios";

const GETALL: string = "/api/admin/all";
const DELETE: string = "/api/admin/";
const UPDATE: string = "/api/admin/";
const ADDSHIFTTODOCTOR: string = "/api/admin/add-doctor-to-shift/";
export default class AdminAPI {

  getAll = (token: string, response: any, error: any) => {
    axios.get(GETALL, { headers: { Authorization: token } })
      .then(response)
      .catch(error);
  };

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
