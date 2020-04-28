import axios from 'axios'

const GET: string = "/api/shift/";
const UPDATE: string = "/api/shift/"
const DELETE: string = "/api/shift/";
const GETALL: string = "/api/shift";
const CREATE: string = "/api/shift";

export default class ShiftAPI {

  get = (token: string, idShift: string, response: any, error: any) => {
    axios.get(GET + idShift, { headers: { Authorization: token } })
      .then(response)
      .catch(error);
  };


  upDate = (token: string, idShift: string, formData: FormData, response: any, error: any) => {
    const data = {
      "startTime": formData.get("startTime")
    }
    axios.put(UPDATE + idShift, data, { headers: { Authorization: token } })
      .then(response)
      .catch(error);
  };

  delete = (token: string, idShift: string, response: any, error: any) => {
    axios({
      method: 'DELETE',
      url: DELETE + idShift,
      headers: {
        Authorization: token
      }
    }
    )
      .then(response)
      .catch(error);
  };

  getAll = (token: string, response: any, error: any) => {
    axios.get(GETALL, { headers: { Authorization: token } })
      .then(response)
      .catch(error);
  };

  create = (token: string, formData: FormData, response: any, error: any) => {
    const data = {
      "startTime": formData.get("startTime"),
      "endTime": formData.get("endTime")
    }
    axios.post(CREATE, data, { headers: { Authorization: token } })
      .then(response)
      .catch(error);
  };
}