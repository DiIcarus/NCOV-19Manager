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
import * as time__ from "./../../modules/time";
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
import {UserssignedState} from '../../store/UsersSigned/type';
//typeInput

interface Props {
  UsersState: UsersState,
  UserssignedState: UserssignedState
}

type State =  typeof initState;

const initState = {
  // room: [] as api__.Room[],
  patient: [] as api__.Patient[],
  shift:[] as api__.Shift[],

  deletemode:false,
  updatemode:false,
  showPopup:false,
  numberPaper:0,
  featureType:"get" as "update" | "delete" | "insert" | "repeat",
  delAll: false,
  listDell:[] as string[],
  valueInputSearch: '' as string,

  shiftRequest:{
    startTime:'',
    endTime:'',
    updatestartTime:'',
    insertstartTime:'',
    insertendTime:'',
    getallpage:'0',
    getalltypesort:'1',
    getallsearch:'A200'
  } as ShiftRequest,
  currentId: '',
  currentShift: {
    idUser: [],
    _id:'',
    startTime: '',
    endTime: '',
    __v: 1
  } as api__.Shift,
}

class InfoTableShift extends Component<Props, State> {
  token = window.sessionStorage.accessToken;
  state = initState;
  adminApi = new AdminAPI();
  doctorApi = new DoctorAPI();
  // roomApi = new RoomAPI();
  shiftApi = new ShiftAPI();
  userApi = new UserAPI();

  //circle
  componentDidMount(){
    console.log(this.state);
    this.GETAll();
    // setInterval(()=>{
    //   console.log(this.state);
    // },2000)
  }

  //API
  InsertCurrent = (formData:FormData) => {
    if(this.token){
      this.shiftApi.create(this.token,formData,(res:any)=>{
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
    this.GetList('?search='+this.state.valueInputSearch);
  }

  DeleteCurrent = (currentId:string) => {
    if(this.token){
      this.shiftApi.delete(this.token,currentId,(res:any)=>{
        console.log(res.data);
      }, 
      (err:string)=>{
        console.log(err);
      })
    }
  }

  UpdateCurrent = (idRoom:string,formData:FormData) => {
    if(this.token){
      this.shiftApi.upDate(this.token,idRoom,formData,(res:any)=>{
        console.log("success update",res.data);
      }, 
      (err:string)=>{
        console.log(err);
      })
    }
  }

  GetUsers = (userId:string) => {
    if(this.token){
      this.shiftApi.get(this.token,userId,(res:any)=>{
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
    formData.append('page',this.state.shiftRequest.getallpage);
    formData.append('typesort',this.state.shiftRequest.getalltypesort);
    formData.append('search',this.state.shiftRequest.getallsearch);
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
    this.shiftApi.getList(this.token,params,
      (res:any)=>{
        console.log(res)
        this.setState({
          shift:res.data.caTruc
        })
      },(err:any)=>{
        console.log(err)
      }
    )
  }
  ////
  getIdRow=(shift:api__.Shift,featureType: "update" | "delete" | "insert")=>{
    switch(featureType){
      case "update":
        this.setState({
          currentShift:shift,
          currentId:shift._id,
          showPopup:true,
          featureType
        })
        break;
    }
  }

  saveInsertPopup = () => {
    //room
    let formdata = new FormData();
    formdata.append('startTime',time__.ParseTime(this.state.shiftRequest.insertendTime,this.state.shiftRequest.startTime).toString());
    formdata.append('endTime',time__.ParseTime(this.state.shiftRequest.insertendTime,this.state.shiftRequest.endTime).toString());
    this.InsertCurrent(formdata);
    let obj = this.state.shiftRequest;
    obj.insertstartTime = "";
    obj.insertendTime = "";
    this.setState({
      shiftRequest:obj
    })
    this.GETAll();
    this.cancelPopup();
  }

  renderInsertForm = () => {
    return (
      <React.Fragment>
        <h4>Start Time</h4>
        <s__.TextFieldArea>
            <s__.TextInput
              variant="outlined"
              // label="startTime"
              id="startTime"
              type="time"
              value={this.state.shiftRequest.startTime}
              placeholder=""
              onChange={this.onchangeStartTime}
            />
          </s__.TextFieldArea>
        <s__.TextFieldArea>
            <s__.TextInput
              variant="outlined"
              // label="startTime"
              id="startTime"
              type="date"
              value={this.state.shiftRequest.insertstartTime}
              placeholder=""
              onChange={this.onchangeInsertStartTime}
            />
          </s__.TextFieldArea>
          <h4>End Time</h4>
          <s__.TextFieldArea>
            <s__.TextInput
              variant="outlined"
              // label="startTime"
              id="startTime"
              type="time"
              value={this.state.shiftRequest.endTime}
              placeholder=""
              onChange={this.onchangeEndTime}
            />
          </s__.TextFieldArea>
          <s__.TextFieldArea>
            <s__.TextInput
              variant="outlined"
              // label="endTime"
              id="endTime"
              type="date"
              value={this.state.shiftRequest.insertendTime}
              onChange={this.onchangeInsertEndTime}
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
    formdata.append('startTime',this.state.shiftRequest.updatestartTime.toString());
    this.UpdateCurrent(this.state.currentId,formdata);
    let obj = this.state.shiftRequest;
    obj.updatestartTime = "";
    this.setState({
      shiftRequest:obj
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
              value={this.state.shiftRequest.updatestartTime}
              onChange={this.onchangUpdateStartTime}
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

  renderRepeatForm = () => {
    return (
    <React.Fragment>
        <h4>Start Time</h4>
        <s__.TextFieldArea>
            <s__.TextInput
              variant="outlined"
              // label="startTime"
              id="startTime"
              type="time"
              value={this.state.shiftRequest.startTime}
              placeholder=""
              onChange={this.onchangeStartTime}
            />
          </s__.TextFieldArea>
        <s__.TextFieldArea>
            <s__.TextInput
              variant="outlined"
              // label="startTime"
              id="startTime"
              type="date"
              value={this.state.shiftRequest.insertstartTime}
              placeholder=""
              onChange={this.onchangeInsertStartTime}
            />
          </s__.TextFieldArea>
          <h4>End Time</h4>
          <s__.TextFieldArea>
            <s__.TextInput
              variant="outlined"
              // label="startTime"
              id="startTime"
              type="time"
              value={this.state.shiftRequest.endTime}
              placeholder=""
              onChange={this.onchangeEndTime}
            />
          </s__.TextFieldArea>
          <s__.TextFieldArea>
            <s__.TextInput
              variant="outlined"
              // label="endTime"
              id="endTime"
              type="date"
              value={this.state.shiftRequest.insertendTime}
              onChange={this.onchangeInsertEndTime}
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
      case "repeat":
        return (
          <React.Fragment>
            {this.renderRepeatForm()}
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
            <h1>This Shift now have {this.state.currentShift.idUser.length} person</h1>
            <h4>Input and click on submit button to update number person on room, or click cancel to exist</h4>
            <p>Start time: {this.state.currentShift.startTime}</p>
            <p>End time: {this.state.currentShift.endTime}</p>
          </React.Fragment>
        )
      case "delete":
        break;
      case "insert":
        return (
          <React.Fragment>
            <h1>Create Shift</h1>
            <h4>Input Shift time and click on submit button to create a new one, else click cancel to exist</h4>
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

  setShowPopupByType = (type:"update" | "delete" | "insert" | "repeat") => {
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
      case "repeat":
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

  onchangUpdateStartTime = (event: ChangeEvent<HTMLInputElement>) => {
    let obj = this.state.shiftRequest;
    obj.updatestartTime = event.target.value;
    this.setState({
      shiftRequest:obj
    })
  }

  onchangeInsertStartTime = (event: ChangeEvent<HTMLInputElement>) => {
    let obj = this.state.shiftRequest;
    obj.insertstartTime = event.target.value;
    this.setState({
      shiftRequest:obj
    })
  }
  onchangeStartTime = (event: ChangeEvent<HTMLInputElement>) => {
    let obj = this.state.shiftRequest;
    obj.startTime = event.target.value;
    this.setState({
      shiftRequest:obj
    })
  }
  onchangeEndTime = (event: ChangeEvent<HTMLInputElement>) => {
    let obj = this.state.shiftRequest;
    obj.endTime = event.target.value;
    this.setState({
      shiftRequest:obj
    })
  }

  onchangeInsertEndTime = (event: ChangeEvent<HTMLInputElement>) => {
    let obj = this.state.shiftRequest;
    obj.insertendTime = event.target.value;
    this.setState({
      shiftRequest:obj
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
        <h1 style={{marginTop:"0px"}}>Shift</h1>
        <s__.FeatureArea>
          <s__.FeatureButton onClick={this.GETAll}><p>Refresh</p></s__.FeatureButton>
          <s__.FeatureButton onClick={()=>this.setShowPopupByType("repeat")}><p>Repeat</p></s__.FeatureButton>
          <s__.FeatureButton onClick={()=>this.setShowPopupByType("insert")}><p>Insert</p></s__.FeatureButton>
          <s__.FeatureButton style={{backgroundColor:this.state.updatemode?"tomato":""}} onClick={this.setUpdateMode}><p>{this.state.updatemode?"Cancel":"Update"}</p></s__.FeatureButton>
          {/* <s__.SearchInput
            id="maxNumber"
            type="text"
            value={this.state.valueInputSearch}
            placeholder="Search Room By Name"
            onChange={this.setInputSearch}
          /> */}
          {/* <s__.FeatureButton onClick={this.SearchValueInputSearch}><p>Search</p></s__.FeatureButton> */}
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
    return this.state.shift.map((row) => (
      <s__.TableRowInfo key={row._id} onClick={this.state.updatemode?()=>this.getIdRow(row,"update"):()=>this.setIdCurrent(row._id)}
      onFocus={()=>this.setIdCurrent(row._id)}>
        <TableCell>{row.idUser.length}</TableCell>
        <TableCell>{time__.Timestamp2Time(row.startTime)}</TableCell>
        <TableCell>{time__.Timestamp2Time(row.endTime)}</TableCell>
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
              <TableCell>Number person</TableCell>
              <TableCell>Start time</TableCell>
              <TableCell>End time</TableCell>
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
export default connect(mapStateToProps,{})(InfoTableShift);


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