export default class APIDemo{

  deleteAPI=(id:number)=>{
    const url = `/DeepHub/face_check_in/1.0.0/users/${id}`
    fetch(url,{
      method:'DELETE',
      headers: {
        'x-API-key':'deephub'
      }
    })
    .then(res => res.json())
    .then(data => console.log(data))
  }
  getAPI=(id:number)=>{
    const url = `/DeepHub/face_check_in/1.0.0/users/${id}`

    fetch(url,{
      method:'GET',
      headers: {
        'x-API-key':'deephub'
      }
    })
    .then((response) => response.json())
    .then((data) => console.log('Get:', data))
  }
  // userIdComfirm=(id:number,data:any,methods:string)=>{
  //   const obj:FaceImageBase64s = {
  //     "face_image_base64s":data
  //   }
  //   const url = `/DeepHub/face_check_in/1.0.0/users/${id}/face_image`
    
  //   fetch(url,{
  //       method: methods,
  //       headers:{
  //       'x-API-key':'deephub',
  //       'Content-Type': 'application/json'
  //       },
  //       body:JSON.stringify(obj)
  //   })
  //   .then(response => response.json())
  //   .then(data =>console.log('Success:', data))
  //   .catch(error => console.error('Error:', error));
  // }
  
}