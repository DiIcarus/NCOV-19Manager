import React, { Component, ChangeEvent } from "react";
//style importer
import * as s__ from "./style";
import {Redirect} from 'react-router-dom'
// import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import SaveIcon from '@material-ui/icons/Save';
import CloseIcon from '@material-ui/icons/Close';
// import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import ClearAllIcon from '@material-ui/icons/ClearAll';
import DeleteIcon from '@material-ui/icons/Delete';
import Checkbox from '@material-ui/core/Checkbox';
import JWT from 'jwt-client';
//component importer
// import MainMenu from "../MainMenu/index";
//utils importer
import AdminAPI from "../../modules/api/admin";
import DoctorAPI from "../../modules/api/doctor";
import RoomAPI from "../../modules/api/room";
import ShiftAPI from "../../modules/api/shift";
import UserAPI from "../../modules/api/user";
import * as time__ from "./../../modules/time";
//config importer
import {AdminRequest,DoctorRequest,RoomRequest,ShiftRequest,UserRequest} from "../../config/requesttype";
import * as api__ from "../../config/apireturntype";
import { Button } from "@material-ui/core";
//global store
import { connect } from 'react-redux';
import {MainState} from '../../store/index';
//type
import {UsersState} from '../../store/User/type';
import {UserssignedState} from '../../store/UsersSigned/type';
//typeInput

interface Props {
  UsersState: UsersState,
  UserssignedState: UserssignedState
}

type State =  typeof initState;

const initState = {
  childtable: [] as any[],
  checkedPatien: [] as string[],
  patientInRoom:[] as string[],
  room: [] as api__.Room[],
  patient: [] as api__.Patient[],
  shift:[] as any[],
  role:'',
  currentId: '',
  historyDate: '',
  currentRoom: {
    currentNumber: 1,
    idUser: [],
    _id:'',
    maxNumber: 1,
    address: '',
    name: '',
    __v: 1
  } as api__.Room,
  demo:true,
  deletemode:false,
  updatemode:false,
  historymode:false,
  showPopup:false,
  numberPaper:0,
  featureType:"get" as "update" | "delete" | "insert" | "history" | "none",
  delAll: false,
  listDell:[] as string[],
  valueInputSearch: '' as string,
  roomRequest:{
    updateCurrentNumber:'',
    insertMaxNumber:'',
    insertAddress:'',
    insertName:'',
    getallpage:'0',
    getalltypesort:'1',
    getallsearch:'A200'
  } as RoomRequest
}

class InfoTableRoom extends Component<Props, State> {
  token = window.sessionStorage.accessToken;
  state = initState;
  chekedRoom = [] as api__.Room[] ;
  adminApi = new AdminAPI();
  doctorApi = new DoctorAPI();
  roomApi = new RoomAPI();
  shiftApi = new ShiftAPI();
  userApi = new UserAPI();

  //circle
  componentDidMount(){
    this.GETAll();
    this.setState({
      role:JWT.read(window.sessionStorage.accessToken).claim.roleName
    })
    console.log("TOKEN:",JWT.read(window.sessionStorage.accessToken).claim);
    this.userApi.getProfile(this.token,(res:any) => {
      this.setState({

      })
    },(err:any)=>{
    })
    setInterval(()=>{
      console.log(this.state);
    },2000)
  }

  //API
  InsertCurrent = (formData:FormData) => {
    if(this.token){
      this.roomApi.create(this.token,formData,(res:any)=>{
        console.log(res.data);
      }, 
      (err:string)=>{
        console.log(err);
      })
    }
  }

  SearchValueInputSearch = () => {
    this.GetList('?search='+this.state.valueInputSearch);
  }

  DeleteCurrent = (currentId:string) => {
    if(this.token){
      this.roomApi.delete(this.token,currentId,(res:any)=>{
        console.log(res.data);
      }, 
      (err:string)=>{
        console.log(err);
      })
    }
  }

  UpdateCurrent = (idRoom:string,formData:FormData) => {
    if(this.token){
      this.roomApi.upDate(this.token,idRoom,formData,(res:any)=>{
        console.log(res.data);
      },
      (err:string)=>{
        console.log(err);
      })
    }
  }

  GetUsers = (userId:string) => {
    if(this.token){
      this.roomApi.get(this.token,userId,(res:any)=>{
        console.log(res.data);
      },
      (err:string)=>{
        console.log(err);
        console.log(err);
      })
    }
  }

  GETAll = () =>{
    let formData = new FormData();
    formData.append('page',this.state.roomRequest.getallpage);
    formData.append('typesort',this.state.roomRequest.getalltypesort);
    formData.append('search',this.state.roomRequest.getallsearch);
    if(this.token){
      this.roomApi.getAll(this.token,formData,(res:any)=>{
        console.log(res.data);
        this.setState({
          room:res.data.room,
          childtable: res.data.room,
          numberPaper: (Math.floor(Number.parseInt(res.data.total)/Number.parseInt(res.data.amount))) +1,
          featureType: "insert"
        })
      }, 
      (err:string)=>{
        console.log(err);
      })
    }
  }

  GetList = (params:string) => {
    this.roomApi.getList(this.token,params,
      (res:any)=>{
        console.log("RESULT",res);
        this.setState({
          room:res.data.room,

          childtable:res.data.room
        })
      },(err:any)=>{
        console.log(err)
      }
    )
  }

  GetListHistory = (params:string) => {
    this.roomApi.getListHistory(this.token,params,
      (res:any)=>{
        console.log(res.data.diemDanh.idUser);
        console.log(res.data.diemDanh.listUser);
        this.setState({
          patient:res.data.diemDanh.listUser
        })
      },(err:any)=>{
        console.log(err)
      }
    )
  }

  ////
  getIdRow=(room:api__.Room,featureType: "update" | "delete" | "insert" | "history")=>{
    switch(featureType){
      case "update":
        this.setState({
          currentRoom:room,
          currentId:room._id,
          showPopup:true,
          featureType
        })
        break;
      case "history":
        this.setState({
          currentRoom:room,
          currentId:room._id,
          showPopup:true,
          featureType
        })
        break;
    }
  }

  saveInsertPopup = () => {
    //room
    let formdata = new FormData();
    formdata.append('maxNumber',this.state.roomRequest.insertMaxNumber);
    formdata.append('address',this.state.roomRequest.insertAddress);
    formdata.append('name',this.state.roomRequest.insertName);
    this.InsertCurrent(formdata);
    let obj = this.state.roomRequest;
    obj.insertMaxNumber = "";
    obj.insertAddress = "";
    obj.insertName = "";
    this.setState({
      roomRequest:obj
    })
    this.cancelPopup();
    this.GETAll();
  }

  renderInsertForm = () => {
    return (
      <React.Fragment>
        <s__.TextFieldArea>
            <s__.TextInput
              variant="outlined"
              label="maxNumber"
              id="maxNumber"
              type="text"
              value={this.state.roomRequest.insertMaxNumber}
              placeholder=""
              onChange={this.onchangMaxNumberRoom}
            />
          </s__.TextFieldArea>
          <s__.TextFieldArea>
            <s__.TextInput
              variant="outlined"
              label="address"
              id="address"
              type="text"
              value={this.state.roomRequest.insertAddress}
              onChange={this.onchangAddressRoom}
            />
          </s__.TextFieldArea>
          <s__.TextFieldArea>
            <s__.TextInput
              variant="outlined"
              label="name"
              id="name"
              type="text"
              value={this.state.roomRequest.insertName}
              onChange={this.onchangNameRoom}
            />
          </s__.TextFieldArea>
          <s__.TextFieldArea>
            <s__.ButtonSubmit
              variant="contained"
              color="primary"
              size="large"
              startIcon={<SaveIcon />}
              onClick={this.saveInsertPopup}
            >Save</s__.ButtonSubmit>
          </s__.TextFieldArea>
          <s__.TextFieldArea>
            <s__.ButtonSubmit
              variant="contained"
              color="default"
              size="large"
              startIcon={<CloseIcon />}
              onClick={this.cancelPopup}
            >Cancel</s__.ButtonSubmit>
          </s__.TextFieldArea>
      </React.Fragment>
    )
  }
  renderGetHistoryForm = () => {
    return(
      <React.Fragment>
          <s__.TextFieldArea>
            <s__.TextInput
              variant="outlined"
              // label="history date"
              id="history_date"
              type="date"
              value={(this.state.historyDate)}
              onChange={this.onchangHistoryDate}
            />
          </s__.TextFieldArea>
          <s__.TextFieldArea>
            <s__.ButtonSubmit
              variant="contained"
              color="primary"
              size="large"
              startIcon={<SaveIcon />}
              onClick={this.saveHistoryPopup}
            >Save</s__.ButtonSubmit>
          </s__.TextFieldArea>
          <s__.TextFieldArea>
            <s__.ButtonSubmit
              variant="contained"
              color="default"
              size="large"
              startIcon={<CloseIcon />}
              onClick={this.cancelPopup}
            >Cancel</s__.ButtonSubmit>
          </s__.TextFieldArea>
      </React.Fragment>
    )
  }

  saveUpdatePopup = () => {
    let formdata = new FormData();
    formdata.append('currentNumber',this.state.roomRequest.updateCurrentNumber.toString());
    this.UpdateCurrent(this.state.currentId,formdata);
    let obj = this.state.roomRequest;
    obj.updateCurrentNumber = "";
    this.setState({
      roomRequest:obj
    })
    this.cancelPopup();
    this.GETAll();
  }

  saveHistoryPopup = () => {

    const time = time__.ParseTime(String(this.state.historyDate));
    // console.log("Time:",time__.ParseTime(String(this.state.historyDate)));
    this.roomApi.getListHistory(this.token,"?idRoom="+this.state.currentId+"&date="+time,
    (res:any) => {
      console.log("HISTORY",res)
      console.log("patientChecked:",res.data.diemDanh.listUser);
      console.log("patientInRoom:",res.data.diemDanh.idRoom.idUser);
      this.setState({
        patientInRoom: res.data.diemDanh.idRoom.idUser,
        checkedPatien: res.data.diemDanh.listUser.map((value:any)=> value._id),
        childtable:  res.data.diemDanh.idRoom.idUser,
        featureType: "history",
      })
      // this.doctorApi.getListPatient(this.token,(res:any)=>{
      //   console.log("childtable:",res.data.users)
      //   this.setState({
      //     childtable: res.data.users,
      //     featureType: "history",
      //   })
      // },(err:any)=>{
      //   console.log(err);
      // })
    },
    (err:any) => {
      console.log(err);
    })
  }
//   {
//     "diemDanh": {
//         "listUser": [
//             {
//                 "avatars": [
//                     "public/img/5ec0f66979444907d0b2704c_img0.jpg",
//                     "public/img/5ec0f66979444907d0b2704c_img1.jpg",
//                     "public/img/5ec0f66979444907d0b2704c_img2.jpg",
//                     "public/img/5ec0f66979444907d0b2704c_img3.jpg",
//                     "public/img/5ec0f66979444907d0b2704c_img4.jpg",
//                     "public/img/5ec0f66979444907d0b2704c_img5.jpg"
//                 ],
//                 "gender": 1,
//                 "isActive": false,
//                 "gps": [
//                     {
//                         "x": "10.849069666964017",
//                         "y": "106.79749281687133"
//                     }
//                 ],
//                 "code": null,
//                 "_id": "5ec0f66979444907d0b2704c",
//                 "address": "TP Hồ Chí Minh",
//                 "dateOfBirth": "01/01/1990",
//                 "email": "BenhNhan00000003@gmail.com",
//                 "fullName": "ha huu nhut",
//                 "identityCard": "000000003",
//                 "password": "$2b$10$I89p0AbmYHbpQxqoV504X.N4bg0cUYo.JXnLnvXbUpYiuZbLEryIm",
//                 "phoneNumber": "09800000003",
//                 "idRole": "5ea2cb1078e7c42110789d4d",
//                 "__v": 0
//             }
//         ],
//         "_id": "5ecb9e2fc3539629eca4f651",
//         "idUser": {
//             "avatars": [],
//             "gender": 3,
//             "isActive": false,
//             "gps": [],
//             "code": null,
//             "_id": "5ec0f47879444907d0b2703a",
//             "address": "Ha Tinh",
//             "dateOfBirth": "20/04/1998",
//             "email": "truongquoctai0498@gmail.com",
//             "fullName": "Truong Quoc Tai",
//             "identityCard": "184261922",
//             "password": "$2b$10$UM2QhGkFsGdmj4c1EYZMyeSpUZ1ttJraI6HbSl/sDEmYIQLatwU.2",
//             "phoneNumber": "0364124747",
//             "idRole": {
//                 "_id": "5ea2cb1078e7c42110789d4c",
//                 "name": "BAC_SI",
//                 "__v": 0
//             },
//             "__v": 0
//         },
//         "idRoom": {
//             "currentNumber": 1,
//             "idUser": [
//                 {
//                     "avatars": [
//                         "public/img/5ec0f66979444907d0b2704c_img0.jpg",
//                         "public/img/5ec0f66979444907d0b2704c_img1.jpg",
//                         "public/img/5ec0f66979444907d0b2704c_img2.jpg",
//                         "public/img/5ec0f66979444907d0b2704c_img3.jpg",
//                         "public/img/5ec0f66979444907d0b2704c_img4.jpg",
//                         "public/img/5ec0f66979444907d0b2704c_img5.jpg"
//                     ],
//                     "gender": 1,
//                     "isActive": false,
//                     "gps": [
//                         {
//                             "x": "10.849069666964017",
//                             "y": "106.79749281687133"
//                         }
//                     ],
//                     "code": null,
//                     "_id": "5ec0f66979444907d0b2704c",
//                     "address": "TP Hồ Chí Minh",
//                     "dateOfBirth": "01/01/1990",
//                     "email": "BenhNhan00000003@gmail.com",
//                     "fullName": "ha huu nhut",
//                     "identityCard": "000000003",
//                     "password": "$2b$10$I89p0AbmYHbpQxqoV504X.N4bg0cUYo.JXnLnvXbUpYiuZbLEryIm",
//                     "phoneNumber": "09800000003",
//                     "idRole": "5ea2cb1078e7c42110789d4d",
//                     "__v": 0
//                 }
//             ],
//             "_id": "5ec0f5bd79444907d0b2703e",
//             "maxNumber": 10,
//             "address": "TP Hồ Chí Minh",
//             "name": "A101",
//             "__v": 0
//         },
//         "startTime": 1590402607000,
//         "__v": 0
//     }
// }
  renderUpdateForm = () => {
    return (
      <React.Fragment>
          <s__.TextFieldArea>
            <s__.TextInput
              variant="outlined"
              label="currentNumber"
              id="currentNumber"
              type="text"
              value={this.state.roomRequest.updateCurrentNumber}
              onChange={this.onchangCurrentNumberRoom}
            />
          </s__.TextFieldArea>
          <s__.TextFieldArea>
            <s__.ButtonSubmit
              variant="contained"
              color="primary"
              size="large"
              startIcon={<SaveIcon />}
              onClick={this.saveUpdatePopup}
            >Save</s__.ButtonSubmit>
          </s__.TextFieldArea>
          <s__.TextFieldArea>
            <s__.ButtonSubmit
              variant="contained"
              color="default"
              size="large"
              startIcon={<CloseIcon />}
              onClick={this.cancelPopup}
            >Cancel</s__.ButtonSubmit>
          </s__.TextFieldArea>
      </React.Fragment>
    )
  }

  renderPopupInput = (type:string) => {
    switch(type){
      case "get":
        break;
      case "update":
        return (
          <React.Fragment>
            {this.renderUpdateForm()}
          </React.Fragment>
        )
      case "delete":
        break;
      case "insert":
        return (
          <React.Fragment>
            {this.renderInsertForm()}
          </React.Fragment>
        )
      case "history":
        return (
          <React.Fragment>
            {this.renderGetHistoryForm()}
          </React.Fragment>
        )
    }
    
  }

  renderPopupInfo = (type:string) => {
    switch(type){
      case "get":
        break;
      case "update":
        return (
          <React.Fragment>
            <h1>Update Room {this.state.currentRoom.name}</h1>
            <h4>Input and click on submit button to update number person on room, or click cancel to exist</h4>
            <p>Current number is {this.state.currentRoom.currentNumber}</p>
            <p>Max number is {this.state.currentRoom.maxNumber}</p>
          </React.Fragment>
        )
      case "delete":
        break;
      case "insert":
        return (
          <React.Fragment>
            <h1>Create Room</h1>
            <h4>Input and click on submit button to create a new one, else click cancel to exist</h4>
          </React.Fragment>
        )
      case "history":
        return(
          <React.Fragment>
            <h1>Get History Room</h1>
            <h4>Input and click on submit button to get history, else click cancel to exist</h4>
          </React.Fragment>
        )
    }
  }

  showPopup = (type:string) => {
    return (
      <>
        <s__.PopupBackground onClick={this.cancelPopup}>
        </s__.PopupBackground>
        <s__.PopupContainer>
          <s__.PopupInfo>
            {this.renderPopupInfo(type)}
          </s__.PopupInfo>
          <s__.PopupInput>
            {this.renderPopupInput(type)}
          </s__.PopupInput>
        </s__.PopupContainer>
      </>
    )
  }

  cancelPopup=()=>{
    this.setState({
      showPopup:false,
      // featureType: "none",
    })
  }

  setShowPopupByType = (type:"update" | "delete" | "insert" | "history") => {
    switch(type){
      case "update":
        this.setState({
          updatemode:true,
          featureType:type
        })
        break;
      case "delete":
        break;
      case "insert":
        this.setState({
          featureType:type,
          showPopup: true
        })
        break;
      case "history":
        this.setState({
          featureType:type,
          showPopup: true
        })
        break;
    }
    
  }

  setDeleteMode = () => {
    this.setState({
      deletemode:!this.state.deletemode,
      updatemode:false
    })
  }

  setUpdateMode = () => {
    this.setState({
      updatemode:!this.state.updatemode,
      deletemode:false
    })
  }

  setHistoryMode = () => {
    this.setState({
      historymode:!this.state.historymode,
      deletemode:false
    })
  }

  setShowPopup = () => {
    this.setState({
      showPopup:!this.state.showPopup
    })
  }

  donotthing = () => {
    console.log("success");
  }

  setDelAll = () => {
    this.setState({
      delAll:!this.state.delAll,
    })
    console.log(this.state.delAll);
  }

  setInputSearch = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      valueInputSearch: event.target.value
    })
  }

  onchangCurrentNumberRoom = (event: ChangeEvent<HTMLInputElement>) => {
    let obj = this.state.roomRequest;
    obj.updateCurrentNumber = event.target.value;
    this.setState({
      roomRequest:obj
    })
  }

  onchangHistoryDate = (event: ChangeEvent<HTMLInputElement>) => {
    let obj = this.state.historyDate;
    console.log("HIS",event.target.value);
    this.setState({
      historyDate:event.target.value
    })
  }
  onchangMaxNumberRoom = (event: ChangeEvent<HTMLInputElement>) => {
    let obj = this.state.roomRequest;
    obj.insertMaxNumber = event.target.value;
    this.setState({
      roomRequest:obj
    })
  }

  onchangAddressRoom = (event: ChangeEvent<HTMLInputElement>) => {
    let obj = this.state.roomRequest;
    obj.insertAddress = event.target.value;
    this.setState({
      roomRequest:obj
    })
  }

  onchangNameRoom = (event: ChangeEvent<HTMLInputElement>) => {
    let obj = this.state.roomRequest;
    obj.insertName = event.target.value;
    this.setState({
      roomRequest:obj
    })
  }

  //Render
  renderButton= () =>{
    return (
      <div style={{
        backgroundColor:"darkblue",
        height:"auto",
        borderTopRightRadius:"5px", 
        borderTopLeftRadius:"5px",
        padding:"20px 0px 0px 20px",
        color:"white"
        }}
      >
        <h1 style={{marginTop:"0px"}}>Room</h1>
        <s__.FeatureArea>
          <s__.FeatureButton onClick={this.GETAll}><p>Refresh</p></s__.FeatureButton>
          {<s__.FeatureButton style={{backgroundColor:this.state.historymode?"tomato":""}} onClick={this.setHistoryMode}><p>{this.state.historymode?"Cancel":"History"}</p></s__.FeatureButton>}
          {this.state.role==="SUPER_ADMIN"?<s__.FeatureButton onClick={()=>this.setShowPopupByType("insert")}><p>Insert</p></s__.FeatureButton>:<React.Fragment/>}
          {this.state.role==="SUPER_ADMIN"?<s__.FeatureButton style={{backgroundColor:this.state.updatemode?"tomato":""}} onClick={this.setUpdateMode}><p>{this.state.updatemode?"Cancel":"Update"}</p></s__.FeatureButton>:<React.Fragment/>}
          <s__.SearchInput
            id="maxNumber"
            type="text"
            value={this.state.valueInputSearch}
            placeholder="Search Room By Name"
            onChange={this.setInputSearch}
          />
          <s__.FeatureButton onClick={this.SearchValueInputSearch}><p>Search</p></s__.FeatureButton>
          <s__.FeatureButton style={{backgroundColor:this.state.deletemode?"mediumspringgreen":"",display:this.state.deletemode?"":"none"}} onClick={this.deleteAllCheckd}><p>Save</p></s__.FeatureButton>
          {this.state.role==="SUPER_ADMIN"?<s__.FeatureButton style={{backgroundColor:this.state.deletemode?"tomato":""}} onClick={this.setDeleteMode}><p>{this.state.deletemode?"Cancel":"Delete"}</p></s__.FeatureButton>:<React.Fragment></React.Fragment>}
        </s__.FeatureArea>
      </div>
      
    )
  }

  deleteAllCheckd= () =>{
    console.log('deleteAllCheckd');
    this.state.listDell.map(value => {
      this.DeleteCurrent(value);
    })
    this.setState({
      listDell:[],
      deletemode:false
    })
    this.GETAll();
  }

  setIdCurrent = (currentId:string) => {
    this.setState({
      currentId
    })
  }

  setListDel = () => {
    let arr = this.state.listDell;
    if(arr.indexOf(this.state.currentId)===-1){
      arr.push(this.state.currentId)
      this.setState({
        listDell:arr
      })
    }else{
      arr.splice(arr.indexOf(this.state.currentId),1)
      this.setState({
        listDell:arr
      })
    }
  }

  renderChildTableRoom = () => {
    switch(this.state.featureType){
      case "history":
        return this.state.childtable.map((row:api__.Patient) => (
          <s__.TableRowInfo 
          key={row._id}
          style={{backgroundColor:(this.state.checkedPatien.indexOf(row._id))?"tomato":"inherit"}}
          >
            <TableCell>{row.fullName}</TableCell>
            <TableCell>{row.gender}</TableCell>
            <TableCell>{row.identityCard}</TableCell>
            <TableCell >{row.phoneNumber}</TableCell>
            <TableCell >{row.dateOfBirth}</TableCell>
            <TableCell >{row.address}</TableCell>
            <TableCell > {(this.state.checkedPatien.indexOf(row._id))?"uncheck":"checked"}</TableCell>
          </s__.TableRowInfo>
        ))
      default:
        return this.state.childtable.map((row) => (
      <s__.TableRowInfo 
      key={row._id} 
      onClick={(this.state.updatemode || this.state.historymode)?(this.state.historymode?()=>this.getIdRow(row,"history"):()=>this.getIdRow(row,"update")):()=>this.setIdCurrent(row._id)}
      onFocus={()=>this.setIdCurrent(row._id)}
      // style={{co:(row._id===this.state.checkedPatien.filter((value:any)=>{value._id===row._id}))?"inherit":"green"}}
      >
        <TableCell>{row.name}</TableCell>
        <TableCell>{row.currentNumber}</TableCell>
        <TableCell>{row.maxNumber}</TableCell>
        <TableCell>{row.address}</TableCell>
        <TableCell align="right" style={{display:this.state.deletemode?"":"none"}} >
          <Checkbox 
            size="small"
            onChange={this.setListDel}
          />
        </TableCell>
      </s__.TableRowInfo>
    ))
    }
  }

  renderGrid = () =>{
    switch(this.state.featureType){
      case "history":
        return (
          <div style={{backgroundColor:"lightcyan",overflow:"auto",height:"400px"}}>
            <div >
              <Table size="small">
                <TableHead >
                  <s__.TableRowHead style={{height:"50px"}}>
                    <TableCell>FullName</TableCell>
                    <TableCell>Gender</TableCell>
                    <TableCell>IdentityCard</TableCell>
                    <TableCell>PhoneNumber</TableCell>
                    <TableCell>DateOfBirth</TableCell>
                    <TableCell>Address</TableCell>
                    <TableCell>CheckState</TableCell>
                  </s__.TableRowHead>
                </TableHead>
                <TableBody>
                  {this.renderChildTableRoom()}
                </TableBody>
              </Table>
            </div>
          </div>
        )
      default:
        return (
          <div style={{backgroundColor:"lightcyan",overflow:"auto",height:"400px"}}>
            <div >
              <Table size="small">
                <TableHead >
                  <s__.TableRowHead style={{height:"50px"}}>
                    <TableCell>Name</TableCell>
                    <TableCell>Ship To</TableCell>
                    <TableCell>Payment Method</TableCell>
                    <TableCell>Address</TableCell>
                    <TableCell align="right" style={{display:this.state.deletemode?"":"none"}}>
                      <Checkbox 
                        size="small"
                        onChange={this.setDelAll}/>
                    </TableCell>
                  </s__.TableRowHead>
                </TableHead>
                <TableBody>
                  {this.renderChildTableRoom()}
                </TableBody>
              </Table>
            </div>
          </div>
        )
    }
    
  }

  renderPaper = () =>{
    let arr = new Array(this.state.numberPaper);
    return (
        <s__.PaperDiv>
          {
          [...Array(this.state.numberPaper).keys()].map((value,index)=>{
            return <s__.PaperDivNumber onClick={()=>{this.GetList('?page='+value)}}><p>{value+1}</p></s__.PaperDivNumber>
          })
          }
          
        </s__.PaperDiv>
    )
  }

  //Main render
  render() {
    return (
      <s__.Container style={{paddingBottom:"0px"}}>
        <div>
          {this.state.showPopup?this.showPopup(this.state.featureType):<React.Fragment/>}
          {this.renderButton()}
          {this.renderGrid()}
          {this.renderPaper()}
        </div>
      </s__.Container>
    );
  }
}

const mapStateToProps = (state:MainState) =>({
  UserssignedState: state.UserssignedState,
  UsersState: state.UsersState
});
export default connect(mapStateToProps,{})(InfoTableRoom);


// demoClickRedirect = () => {
//   this.setState({
//     demo:false
//   })
// }

// demoRedirect = ()=>{
//   if(this.state.demo){
//     return <React.Fragment/>
//   }else{
//     return <Redirect to="/about-us"/>
//   }
// }