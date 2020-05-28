import axios from 'axios';
import * as config__ from "./../config";

const ROOM:string = config__.ROOM;
const DIEMDANH:string = config__.DIEMDANH;
export default class RoomAPI {

  getAll = (token: string,formData: FormData, response: any, error: any) => {
    const data = {
      "page": formData.get("page"),
      "typesort": formData.get("typesort"),
      "search": formData.get("search")
    }
    axios.get(ROOM,{ headers: { Authorization: token },data:data })
      .then(response)
      .catch(error);
  };
  getList = (token: string,params: string, response: any, error: any) => {
    axios.get(ROOM+params,{ headers: { Authorization: token }})
      .then(response)
      .catch(error);
  };

  getListHistory = (token: string,params: string, response: any, error: any) => {
    axios.get(DIEMDANH+params,{ headers: { Authorization: token }})
      .then(response)
      .catch(error);
  };

  get = (token: string, idRoom: string, response: any, error: any) => {
    axios.get(ROOM + idRoom, { headers: { Authorization: token } })
      .then(response)
      .catch(error);
  };
  upDate = (token: string, idRoom: string, formData: FormData, response: any, error: any) => {
    const data = {
      "currentNumber": formData.get("currentNumber")
    }
    axios.put(ROOM + idRoom, data, { headers: { Authorization: token } })
      .then(response)
      .catch(error);
  };

  delete = (token: string, idRoom: string, response: any, error: any) => {
    axios({
      method: 'DELETE',
      url: ROOM + idRoom,
      headers: {
        Authorization: token
      }
    }
    )
      .then(response)
      .catch(error);
  };

  create = (token: string, formData: FormData, response: any, error: any) => {
    const data = {
      "maxNumber": formData.get("maxNumber"),
      "address": formData.get("address"),
      "name": formData.get("name")
    }
    axios.post(ROOM, data, { headers: { Authorization: token } })
      .then(response)
      .catch(error);
  };
}