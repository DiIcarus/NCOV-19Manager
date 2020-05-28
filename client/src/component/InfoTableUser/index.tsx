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
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
//component importer
// import MainMenu from "../MainMenu/index";
//utils importer
import AdminAPI from "../../modules/api/admin";
import DoctorAPI from "../../modules/api/doctor";
import RoomAPI from "../../modules/api/room";
import ShiftAPI from "../../modules/api/shift";
import UserAPI from "../../modules/api/user";
import {Timestamp2Time} from "../../modules/time";
//config importer
import {AdminRequest,DoctorRequest,RoomRequest,ShiftRequest,UserRequest} from "../../config/requesttype";
import * as api__ from "../../config/apireturntype";
import { Button } from "@material-ui/core";
//global store
import { connect } from 'react-redux';
import {MainState} from '../../store/index';
//type
import {UsersState} from '../../store/User/type';
import {UserssignedState} from "../../store/UsersSigned/type";
//typeInput

interface Props {
  UsersState: UsersState,
  UserssignedState: UserssignedState
}

type State =  typeof initState;

const initState = {
  shift: [] as api__.Shift[],
  patient: [] as api__.Patient[],
  users:[] as api__.Users[],

  deletemode:false,
  updatemode:false,
  insertmode:false,
  showPopup:false,
  numberPaper:0,
  featureType:"get" as "update" | "delete" | "insert",
  delAll: false,
  listDell:[] as string[],
  valueInputSearch: '' as string,
  usersRequest:{
    updateemail:'' as string,
    addshiftidShift:'' as string
  } as AdminRequest,
  currentId: '',
  currentUsers: {
    avatars: [] as any[],
    gender: -1 as number,
    isActive: true as boolean,
    gps:[] as number[],
    _id:'' as string,
    address:''as string,
    password:'' as string,
    phoneNumber:'' as string,
    dateOfBirth:'' as string,
    identityCard:'' as string,
    fullName:'' as string,
    email:'' as string,
    idRole:{
      __id:'' as string,
      name:'' as string,
      __v:-1 as number
    },
    __v:-1 as number
  } as api__.Users
}

class InfoTableUser extends Component<Props, State> {
  state = initState;
  adminApi = new AdminAPI();
  token = window.sessionStorage.accessToken;
  doctorApi = new DoctorAPI();
  roomApi = new RoomAPI();
  shiftApi = new ShiftAPI();
  userApi = new UserAPI();

  //circle
  componentDidMount(){
    // console.log(this.state);
    this.GETAll();
    this.GETAllShift();
    setInterval(()=>{
      console.log("state",this.state);
      // console.log(this.props.UserssignedState.token);
    },2000)
  }

  

  //API
  AddShiftToDoctor = (formData:FormData,idDoctor:string) => {
    if(this.token){
      this.adminApi.addShiftToDoctor(this.token,idDoctor,formData,(res:any)=>{
        console.log(res.data);
      }, 
      (err:string)=>{
        console.log(err);
        console.log(err);
      })
    }
  }

  SearchValueInputSearch = () => {
    console.log('SearchValueInputSearch',+this.state.valueInputSearch+"[[[[")
    this.GetList('?search='+this.state.valueInputSearch.trim());
  }

  DeleteCurrent = (currentId:string) => {
    if(this.token){
      this.adminApi.deleteUser(this.token,currentId,(res:any)=>{
        console.log(res.data);
      }, 
      (err:string)=>{
        console.log(err);
      })
    }
  }

  UpdateCurrent = (idUsers:string,formData:FormData) => {
    if(this.token){
      this.adminApi.updateUser(this.token,idUsers,formData,(res:any)=>{
        console.log("Successful");
      }, 
      (err:string)=>{
        console.log(err);
      })
    }
  }

  GETAll = () =>{
    if(this.token){
      this.adminApi.getAll(this.token,(res:any)=>{
        console.log("Get all",res.data);
        this.setState({
          users:res.data.users
        })
      }, 
      (err:string)=>{
        console.log(err);
        console.log(err);
      })
    }
  }

  GETAllShift = () =>{
    if(this.token){
      this.shiftApi.getAll(this.token,(res:any)=>{
        console.log("catruc",res.data.caTruc);
        this.setState({
          shift:res.data.caTruc
        })
      }, 
      (err:string)=>{
        console.log(err);
        console.log(err);
      })
    }
  }

  GetList = (params:string) => {
    this.adminApi.getList(this.token,params,
      (res:any)=>{
        console.log(res)
        this.setState({
          users:res.data.users
        })
      },(err:any)=>{
        console.log(err)
      }
    )
  }
  ////
  getIdRow=(users:api__.Users,featureType: "update" | "delete" | "insert")=>{
    switch(featureType){
      case "update":
        this.setState({
          currentUsers:users,
          currentId:users._id,
          showPopup:true,
          featureType
        })
        break;
      case "insert":
        this.setState({
          currentUsers:users,
          currentId:users._id,
          showPopup:true,
          featureType
        })
        break;
    }
  }



  addShiftToDoctor = () => {
    let formdata = new FormData();
    formdata.append('idShift',this.state.usersRequest.addshiftidShift);
    this.AddShiftToDoctor(formdata,this.state.currentId);
    let obj = this.state.usersRequest;
    obj.addshiftidShift = "";
    this.setState({
      usersRequest:obj
    })
    this.cancelPopup();
    this.GETAll();
  }

  renderInsertForm = () => {
    return (
      <React.Fragment>
        <Autocomplete
            id="country-select-demo"
            style={{ width: 300 }}
            options={this.state.shift}
            autoHighlight
            getOptionLabel={(option:api__.Shift) => "Start:"+Timestamp2Time(option.startTime)+"- End:"+ Timestamp2Time(option.endTime)}
            renderOption={(option:api__.Shift) => (
              <React.Fragment>
                Start:({Timestamp2Time(option.startTime)}) - End:({Timestamp2Time(option.endTime)})
              </React.Fragment>
            )}
            renderInput={(params:any) => (
              <TextField
                {...params}
                label="Choose a Shift"
                variant="outlined"
                inputProps={{
                  ...params.inputProps,
                  autoComplete: 'new-password',
                }}
              />
            )}
            onChange={(event:any, value: any, reason: string) => {
              console.log("need",value);
              this.onchangIdShiftAdmin(value._id);
            }}
          />
          <s__.TextFieldArea>
            <s__.ButtonSubmit
              variant="contained"
              color="primary"
              size="large"
              startIcon={<SaveIcon />}
              onClick={this.addShiftToDoctor}
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
    formdata.append('email',this.state.usersRequest.updateemail.toString());
    console.log(this.state.currentId);
    this.UpdateCurrent(this.state.currentId,formdata);
    let obj = this.state.usersRequest;
    obj.updateemail = "";
    this.setState({
      usersRequest:obj
    })
    this.cancelPopup();
    this.GETAll();
  }

  renderUpdateForm = () => {
    return (
      <React.Fragment>
          <s__.TextFieldArea>
            <s__.TextInput
              variant="outlined"
              label="Email"
              id="Email"
              type="text"
              value={this.state.usersRequest.updateemail}
              onChange={this.onchangEmailAdmin}
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
    }
    
  }

  renderPopupInfo = (type:string) => {
    switch(type){
      case "get":
        break;
      case "update":
        return (
          <React.Fragment>
            <h1>Update Room {this.state.currentUsers.fullName}</h1>
            <h4>Input and click on submit button to update number person on room, or click cancel to exist</h4>
            <p>Current number is {this.state.currentUsers.email}</p>
            <p>Max number is {this.state.currentUsers.fullName}</p>
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
      showPopup:false
    })
  }

  setShowPopupByType = (type:"update" | "delete" | "insert") => {
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
    }
    
  }

  setInsertMode = () =>{
    this.setState({
      insertmode:!this.state.insertmode,
      featureType: 'insert',
      deletemode: false,
      updatemode:false
    })
  }
  setDeleteMode = () => {
    this.setState({
      deletemode:!this.state.deletemode,
      featureType: 'delete',
      insertmode:false,
      updatemode:false
    })
  }

  setUpdateMode = () => {
    this.setState({
      updatemode:!this.state.updatemode,
      featureType:'update',
      deletemode:false,
      insertmode:false
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

  onchangEmailAdmin = (event: ChangeEvent<HTMLInputElement>) => {
    let obj = this.state.usersRequest;
    obj.updateemail = event.target.value;
    this.setState({
      usersRequest:obj
    })
  }

  onchangIdShiftAdmin = (idShift:string) => {
    let obj = this.state.usersRequest;
    obj.addshiftidShift = idShift;
    this.setState({
      usersRequest:obj
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
        <h1 style={{marginTop:"0px"}}>User Manager</h1>
        <s__.FeatureArea>
          <s__.FeatureButton onClick={this.GETAll}><p>Refresh</p></s__.FeatureButton>
          {/* <s__.FeatureButton onClick={()=>this.setShowPopupByType("insert")}><p>Add Shift To Doctor</p></s__.FeatureButton> */}
          <s__.FeatureButton style={{backgroundColor:this.state.insertmode?"tomato":""}} onClick={this.setInsertMode}><p>{this.state.insertmode?"Cancel":"Add Shift To Doctor"}</p></s__.FeatureButton>
          <s__.FeatureButton style={{backgroundColor:this.state.updatemode?"tomato":""}} onClick={this.setUpdateMode}><p>{this.state.updatemode?"Cancel":"Update User"}</p></s__.FeatureButton>
          <s__.SearchInput
            id="maxNumber"
            type="text"
            value={this.state.valueInputSearch}
            placeholder="Search Room By Name"
            onChange={this.setInputSearch}
          />
          <s__.FeatureButton onClick={this.SearchValueInputSearch}><p>Search</p></s__.FeatureButton>
          <s__.FeatureButton style={{backgroundColor:this.state.deletemode?"mediumspringgreen":"",display:this.state.deletemode?"":"none"}} onClick={this.deleteAllCheckd}><p>Save</p></s__.FeatureButton>
          <s__.FeatureButton style={{backgroundColor:this.state.deletemode?"tomato":""}} onClick={this.setDeleteMode}><p>{this.state.deletemode?"Cancel":"Delete"}</p></s__.FeatureButton>
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
    console.log("showinfo",this.state.users);
    return this.state.users.map((row) => (
      <s__.TableRowInfo key={row._id} onClick={(this.state.updatemode || this.state.insertmode)?()=>this.getIdRow(row,this.state.featureType):()=>this.setIdCurrent(row._id)}
      onFocus={()=>this.setIdCurrent(row._id)}>
        <TableCell>{row.fullName}</TableCell>
        <TableCell>{row.idRole.name}</TableCell>
        <TableCell>{row.identityCard}</TableCell>
        <TableCell >{row.isActive.toString()}</TableCell>
        <TableCell >{row.phoneNumber}</TableCell>
        <TableCell >{row.dateOfBirth}</TableCell>
        <TableCell >{row.email}</TableCell>
        <TableCell align="right" style={{display:this.state.deletemode?"":"none"}} >
          <Checkbox 
            size="small"
            onChange={this.setListDel}  
          />
        </TableCell>
      </s__.TableRowInfo>
    ))
  }

  renderGrid = () =>{
    return (
    <div style={{backgroundColor:"lightcyan",overflow:"auto",height:"400px"}}>
      <div >
        <Table size="small">
          <TableHead >
            <s__.TableRowHead style={{height:"50px"}}>
              <TableCell>Full Name</TableCell>
              <TableCell>Role</TableCell>
              <TableCell>IdentityCard</TableCell>
              <TableCell>Active</TableCell>
              <TableCell>PhoneNumber</TableCell>
              <TableCell>DateOfBirth</TableCell>
              <TableCell>Email</TableCell>
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
  UsersState: state.UsersState,
  UserssignedState: state.UserssignedState
});
export default connect(mapStateToProps,{})(InfoTableUser);
