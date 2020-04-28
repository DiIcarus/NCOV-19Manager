import axios from 'axios'

export default class RoomAPI {

  getAll = (token: string,formData: FormData, response: any, error: any) => {
    const data = {
      "page": formData.get("page"),
      "typesort": formData.get("typesort"),
      "search": formData.get("search")
    }
    axios.get('/api/room/',{ headers: { Authorization: token },data:data })
    // $.get('/api/room/',{ headers: { Authorization: token },data:data })
    // fetch(
    //   '/api/room/',
    //   {
    //     method:'GET',
    //     headers:{
    //       Authorization: token
    //     },
    //     body:JSON.stringify(data)
    //   }
    // )
    // axios({
    //   method: 'GET',
    //   url: '/api/room/',
    //   data:data,
    //   headers: {
    //     Authorization: token
    //   }
    // })
      .then(response)
      .catch(error);
  };

  get = (token: string, idRoom: string, response: any, error: any) => {
    axios.get('/api/room/' + idRoom, { headers: { Authorization: token } })
      .then(response)
      .catch(error);
  };
  upDate = (token: string, idRoom: string, formData: FormData, response: any, error: any) => {
    const data = {
      "currentNumber": formData.get("currentNumber")
    }
    axios.put('/api/room/' + idRoom, data, { headers: { Authorization: token } })
      .then(response)
      .catch(error);
  };

  delete = (token: string, idRoom: string, response: any, error: any) => {
    axios({
      method: 'DELETE',
      url: '/api/room/' + idRoom,
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
    axios.post('/api/room/', data, { headers: { Authorization: token } })
      .then(response)
      .catch(error);
  };
}