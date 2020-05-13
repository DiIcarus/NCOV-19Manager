import axios from 'axios'
import * as config__ from "./../config";
const GET: string = config__.SHIFT;
const UPDATE: string = config__.SHIFT;
const DELETE: string = config__.SHIFT;
const GETALL: string = config__.SHIFT;
const CREATE: string = config__.SHIFT;

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
  getList = (token: string,params:string, response: any, error: any) => {
    axios.get(GETALL+params, { headers: { Authorization: token } })
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