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

//typeInput

interface Props {
  UsersState: UsersState
}

type State =  typeof initState;

const initState = {
  room: [] as api__.Room[],
  patient: [] as api__.Patient[],
  shift:[] as any[],
  currentId: '',
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
  showPopup:false,
  numberPaper:0,
  featureType:"get" as "update" | "delete" | "insert",
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
  token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlYTJjYjEyNzhlN2M0MjExMDc4OWQ0ZiIsImlkUm9sZSI6eyJfaWQiOiI1ZWEyY2IxMDc4ZTdjNDIxMTA3ODlkNGUiLCJuYW1lIjoiU1VQRVJfQURNSU4iLCJfX3YiOjB9LCJpc0FjdGl2ZSI6ZmFsc2UsInJvbGVOYW1lIjoiU1VQRVJfQURNSU4iLCJpYXQiOjE1ODc4MDA5OTQsImV4cCI6MTU4Nzg0NDE5NH0.VrVQz_W0o-04TXdlGD9O2r4AW4ylNJajexWmItWrR0k";
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
        console.log(err);
      })
    }
  }

  SearchValueInputSearch = () => {
    console.log('SearchValueInputSearch')
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
          room:res.data.room
        })
      }, 
      (err:string)=>{
        console.log(err);
        console.log(err);
      })
    }
  }

  ////
  getIdRow=(room:api__.Room,featureType: "update" | "delete" | "insert")=>{
    switch(featureType){
      case "update":
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
          <s__.FeatureButton onClick={()=>this.setShowPopupByType("insert")}><p>Insert</p></s__.FeatureButton>
          <s__.FeatureButton style={{backgroundColor:this.state.updatemode?"tomato":""}} onClick={this.setUpdateMode}><p>{this.state.updatemode?"Cancel":"Update"}</p></s__.FeatureButton>
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
    return this.state.room.map((row) => (
      <s__.TableRowInfo key={row._id} onClick={this.state.updatemode?()=>this.getIdRow(row,"update"):()=>this.setIdCurrent(row._id)}
      onFocus={()=>this.setIdCurrent(row._id)}>
        <TableCell>{row.name}</TableCell>
        <TableCell>{row.currentNumber}</TableCell>
        <TableCell>{row.maxNumber}</TableCell>
        <TableCell >{row.address}</TableCell>
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
    <div style={{backgroundColor:"lightcyan",overflow:"auto",height:"350px"}}>
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