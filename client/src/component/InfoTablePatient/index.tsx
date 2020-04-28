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
//config importer
import {AdminRequest,DoctorRequest,RoomRequest,ShiftRequest,UserRequest} from "../../config/requesttype";
import * as api__ from "../../config/apireturntype";
import { Button } from "@material-ui/core";
//global store
import { connect } from 'react-redux';
import {MainState} from '../../store/index';
//type
import {UsersState} from '../../store/User/type';

interface Props {
  UsersState: UsersState
}

type State =  typeof initState;

const initState = {
  room: [] as api__.Room[],
  patient: [] as api__.Patient[],
  shift:[] as any[],
  
  demo:true,
  deletemode:false,
  updatemode:false,
  showPopup:false,
  numberPaper:0,
  featureType:"get" as "update" | "delete" | "insert",
  valueInputSearch: '' as string,
  patientRequest:{
    insertaddress:'' as string,
    insertpassword:'' as string,
    insertphonenumber:'' as string,
    insertdayofbirth:'' as string,
    insertidentitycard:'' as string,
    insertfullname:'' as string,
    insertemail:'' as string,
    insertgender:'' as string,
    getallpage:'' as string,
    getalltypesort:'' as string,
    getallsearch:'' as string,
    addPatientToRoomidRoom:'' as string
  } as DoctorRequest,
  currentId: '',
  currentPatient: {
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
  } as api__.Patient
}

class InfoTablePatient extends Component<Props, State> {
  token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlYTJjYjEyNzhlN2M0MjExMDc4OWQ0ZiIsImlkUm9sZSI6eyJfaWQiOiI1ZWEyY2IxMDc4ZTdjNDIxMTA3ODlkNGUiLCJuYW1lIjoiU1VQRVJfQURNSU4iLCJfX3YiOjB9LCJpc0FjdGl2ZSI6ZmFsc2UsInJvbGVOYW1lIjoiU1VQRVJfQURNSU4iLCJpYXQiOjE1ODc4NjgwNDQsImV4cCI6MTU4NzkxMTI0NH0.Yc93r0R4HKGQK71_kTaBPSDrt-3B_epZ1MrCrw4CTuw";
  state = initState;
  adminApi = new AdminAPI();
  doctorApi = new DoctorAPI();
  roomApi = new RoomAPI();
  shiftApi = new ShiftAPI();
  userApi = new UserAPI();

  //circle
  componentDidMount(){
    console.log(this.state);
    this.GETAll();
    this.GETAllroom();
    setInterval(()=>{
      console.log(this.state);
    },2000)
  }

  GETAllroom = () =>{
    let formData = new FormData();
    if(this.token){
      this.roomApi.getAll(this.token,formData,(res:any)=>{
        console.log('getallroom');
        this.setState({
          room:res.data.room
        })
      }, 
      (err:string)=>{
        console.log(err);
        console.log(err);
      })
    }
  }
  //API
  AddPatienToRoom = (formData:FormData,idPatient:string) => {
    if(this.token){
      this.doctorApi.addPatientToRoom(this.token,idPatient,formData,(res:any)=>{
        console.log(res.data);
      }, 
      (err:string)=>{
        console.log(err);
        console.log(err);
      })
    }
  }

  RegisterPatient = (formData:FormData) => {
    if(this.token){
      this.doctorApi.registerPatient(this.token,formData,(res:any)=>{
        console.log(res.data);
      }, 
      (err:string)=>{
        console.log(err);
        console.log(err);
      })
    }
  }

  SearchValueInputSearch = () => {
    console.log('SearchValueInputSearch')
  }

  GetUsers = (userId:string) => {
    // if(this.token){
    //   this.doctorApi.get(this.token,userId,(res:any)=>{
    //     console.log(res.data);
    //   },
    //   (err:string)=>{
    //     console.log(err);
    //     console.log(err);
    //   })
    // }
  }

  GETAll = () =>{
    let formData = new FormData();
    formData.append('page',this.state.patientRequest.getallpage);
    formData.append('typesort',this.state.patientRequest.getalltypesort);
    formData.append('search',this.state.patientRequest.getallsearch);
    if(this.token){
      this.doctorApi.getListPatient(this.token,(res:any)=>{
        console.log(res.data);
        this.setState({
          patient:res.data.users
        })
      }, 
      (err:string)=>{
        console.log(err);
        console.log(err);
      })
    }
  }

  ////
  getIdRow=(room:api__.Patient,featureType: "update" | "delete" | "insert")=>{
    switch(featureType){
      case "update":
        this.setState({
          currentPatient:room,
          currentId:room._id,
          showPopup:true,
          featureType
        })
        break;
    }
  }

  saveInsertPopup = () => {
    let formdata = new FormData();
    formdata.append('address',this.state.patientRequest.insertaddress);
    formdata.append('password',this.state.patientRequest.insertpassword);
    formdata.append('phoneNumber',this.state.patientRequest.insertphonenumber);
    formdata.append('dateOfBirth',this.state.patientRequest.insertdayofbirth);
    formdata.append('identityCard',this.state.patientRequest.insertidentitycard);
    formdata.append('fullName',this.state.patientRequest.insertfullname);
    formdata.append('email',this.state.patientRequest.insertemail);
    formdata.append('gender',this.state.patientRequest.insertgender);
    this.RegisterPatient(formdata);
    let obj = this.state.patientRequest;
    obj.insertaddress = "";
    obj.insertpassword = "";
    obj.insertphonenumber = "";
    obj.insertdayofbirth = "";
    obj.insertidentitycard = "";
    obj.insertfullname = "";
    obj.insertemail = "";
    obj.insertgender = "";
    this.setState({
      patientRequest:obj
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
              label="Address"
              id="Address"
              type="text"
              value={this.state.patientRequest.insertaddress}
              placeholder=""
              onChange={this.onchangAddressPatient}
            />
          </s__.TextFieldArea>
          <s__.TextFieldArea>
            <s__.TextInput
              variant="outlined"
              label="Password"
              id="Password"
              type="text"
              value={this.state.patientRequest.insertpassword}
              placeholder=""
              onChange={this.onchangPasswordPatient}
            />
          </s__.TextFieldArea>
          <s__.TextFieldArea>
            <s__.TextInput
              variant="outlined"
              label="PhoneNumber"
              id="PhoneNumber"
              type="text"
              value={this.state.patientRequest.insertphonenumber}
              placeholder=""
              onChange={this.onchangPhoneNumberPatient}
            />
          </s__.TextFieldArea>
          <s__.TextFieldArea>
            <s__.TextInput
              variant="outlined"
              label="Date of Birth"
              id="Date of Birth"
              type="text"
              value={this.state.patientRequest.insertdayofbirth}
              placeholder=""
              onChange={this.onchangDateofBirthPatient}
            />
          </s__.TextFieldArea>
          <s__.TextFieldArea>
            <s__.TextInput
              variant="outlined"
              label="Identity Card"
              id="Identity Card"
              type="text"
              value={this.state.patientRequest.insertidentitycard}
              placeholder=""
              onChange={this.onchangIdentityCardPatient}
            />
          </s__.TextFieldArea>
          <s__.TextFieldArea>
            <s__.TextInput
              variant="outlined"
              label="Full Name"
              id="Full Name"
              type="text"
              value={this.state.patientRequest.insertfullname}
              placeholder=""
              onChange={this.onchangFullNamePatient}
            />
          </s__.TextFieldArea>
          <s__.TextFieldArea>
            <s__.TextInput
              variant="outlined"
              label="Email"
              id="Email"
              type="text"
              value={this.state.patientRequest.insertemail}
              placeholder=""
              onChange={this.onchangEmailPatient}
            />
          </s__.TextFieldArea>
          <s__.TextFieldArea>
            <s__.TextInput
              variant="outlined"
              label="Gender"
              id="Gender"
              type="text"
              value={this.state.patientRequest.insertgender}
              placeholder=""
              onChange={this.onchangGenderPatient}
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

  saveUpdatePopup = () => {
    let formdata = new FormData();
    formdata.append('idRoom',this.state.patientRequest.addPatientToRoomidRoom.toString());
    this.AddPatienToRoom(formdata,this.state.currentId);
    let obj = this.state.patientRequest;
    obj.addPatientToRoomidRoom = "";
    this.setState({
      patientRequest:obj
    })
    this.cancelPopup();
    this.GETAll();
  }

  renderUpdateForm = () => {
    return (
      <React.Fragment>
          <Autocomplete
            id="country-select-demo"
            style={{ width: 300 }}
            options={this.state.room}
            autoHighlight
            getOptionLabel={(option:api__.Room) => option.name}
            renderOption={(option:api__.Room) => (
              <React.Fragment>
                {option.name} ({option.currentNumber}) ({option.maxNumber})
              </React.Fragment>
            )}
            renderInput={(params:any) => (
              <TextField
                {...params}
                label="Choose a Room"
                variant="outlined"
                inputProps={{
                  ...params.inputProps,
                  autoComplete: 'new-password',
                }}
                // value={this.state.patientRequest.addPatientToRoomidRoom}
                // onChange={this.onchangidRoomPatient}
              />
            )}
            onChange={(event:any, value: any, reason: string) => {
              console.log("need",value);
              this.onchangidRoomPatient(value._id);
            }}
          />
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
            <h1>Add Patient {this.state.currentPatient.fullName} to room</h1>
            <h4>Input and click on submit button to update number person on room, or click cancel to exist</h4>
            <p>Date of birth: {this.state.currentPatient.dateOfBirth}</p>
            <p>Email: {this.state.currentPatient.email}</p>
            <p>Indentity Card: {this.state.currentPatient.identityCard}</p>
          </React.Fragment>
        )
      case "delete":
        break;
      case "insert":
        return (
          <React.Fragment>
            <h1>Regiter Patient</h1>
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

  setDeleteMode = () => {
    this.setState({
      deletemode:!this.state.deletemode
    })
  }

  setUpdateMode = () => {
    this.setState({
      updatemode:!this.state.updatemode
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

  setInputSearch = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      valueInputSearch: event.target.value
    })
  }

  onchangAddressPatient = (event: ChangeEvent<HTMLInputElement>) => {
    let obj = this.state.patientRequest;
    obj.insertaddress = event.target.value;
    this.setState({
      patientRequest:obj
    })
  }

  onchangPasswordPatient = (event: ChangeEvent<HTMLInputElement>) => {
    let obj = this.state.patientRequest;
    obj.insertpassword = event.target.value;
    this.setState({
      patientRequest:obj
    })
  }

  onchangPhoneNumberPatient = (event: ChangeEvent<HTMLInputElement>) => {
    let obj = this.state.patientRequest;
    obj.insertphonenumber = event.target.value;
    this.setState({
      patientRequest:obj
    })
  }
  onchangDateofBirthPatient = (event: ChangeEvent<HTMLInputElement>) => {
    let obj = this.state.patientRequest;
    obj.insertdayofbirth = event.target.value;
    this.setState({
      patientRequest:obj
    })
  }
  onchangIdentityCardPatient = (event: ChangeEvent<HTMLInputElement>) => {
    let obj = this.state.patientRequest;
    obj.insertidentitycard = event.target.value;
    this.setState({
      patientRequest:obj
    })
  }
  onchangFullNamePatient = (event: ChangeEvent<HTMLInputElement>) => {
    let obj = this.state.patientRequest;
    obj.insertfullname = event.target.value;
    this.setState({
      patientRequest:obj
    })
  }
  onchangEmailPatient = (event: ChangeEvent<HTMLInputElement>) => {
    let obj = this.state.patientRequest;
    obj.insertemail = event.target.value;
    this.setState({
      patientRequest:obj
    })
  }
  onchangGenderPatient = (event: ChangeEvent<HTMLInputElement>) => {
    let obj = this.state.patientRequest;
    obj.insertgender = event.target.value;
    this.setState({
      patientRequest:obj
    })
  }
  onchangidRoomPatient = (idRoom: any) => {
    let obj = this.state.patientRequest;
    obj.addPatientToRoomidRoom = idRoom;
    console.log(idRoom);
    this.setState({
      patientRequest:obj
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
        <h1 style={{marginTop:"0px"}}>Patient</h1>
        <s__.FeatureArea>
          <s__.FeatureButton onClick={()=>this.setShowPopupByType("insert")}><p>Register Patient</p></s__.FeatureButton>
          <s__.FeatureButton style={{backgroundColor:this.state.updatemode?"tomato":""}} onClick={this.setUpdateMode}><p>{this.state.updatemode?"Cancel":"Add Patient To Room"}</p></s__.FeatureButton>
          <s__.SearchInput
            id="maxNumber"
            type="text"
            value={this.state.valueInputSearch}
            placeholder="Search Room By Name"
            onChange={this.setInputSearch}
          />
          <s__.FeatureButton onClick={this.SearchValueInputSearch}><p>Search</p></s__.FeatureButton>
        </s__.FeatureArea>
        
      </div>
      
    )
  }

  setIdCurrent = (currentId:string) => {
    this.setState({
      currentId
    })
  }

  renderChildTableRoom = () => {
    return this.state.patient.map((row) => (
      <s__.TableRowInfo key={row._id} onClick={this.state.updatemode?()=>this.getIdRow(row,"update"):()=>this.setIdCurrent(row._id)}
      onFocus={()=>this.setIdCurrent(row._id)}>
        <TableCell>{row.fullName}</TableCell>
        <TableCell>{row.gender}</TableCell>
        <TableCell>{row.identityCard}</TableCell>
        <TableCell >{row.phoneNumber}</TableCell>
        <TableCell >{row.dateOfBirth}</TableCell>
        <TableCell >{row.address}</TableCell>
      </s__.TableRowInfo>
    ))
  }

  renderGrid = () =>{
    return (
    <div style={{backgroundColor:"lightcyan",overflow:"auto",height:"350px"}}>
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
    return (
      // <s__.PaperDiv>
      //   <s__.PaperDivNumber >
      //     <p style={{margin:"0px"}} >1</p>
      //     <p style={{margin:"0px"}} >2</p>
      //     <p style={{margin:"0px"}} >3</p>
      //   </s__.PaperDivNumber  >
      // </s__.PaperDiv>
        <s__.PaperDiv>
          <s__.PaperDivNumber><p>1</p></s__.PaperDivNumber>
          <s__.PaperDivNumber><p>2</p></s__.PaperDivNumber>
          <s__.PaperDivNumber><p>3</p></s__.PaperDivNumber>
          <s__.PaperDivNumber><p>4</p></s__.PaperDivNumber>
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
  UsersState: state.UsersState
});
export default connect(mapStateToProps,{})(InfoTablePatient);


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