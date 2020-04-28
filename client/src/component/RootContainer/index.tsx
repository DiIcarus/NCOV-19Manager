import React, { Component } from "react";
import * as s__ from "./style";
import MenuTop from "./../MenuTop/index";
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";

import FormRegister from './../FormRegister/index';
import MenuManager from './../MenuManager/index';
import InfoTableRoom from './../InfoTableRoom/index';
import InfoTablePatient from '../InfoTablePatient/index';
import InfoTableShift from './../InfoTableShift/index';
import InfoTableUser from '../InfoTableUser/index';
class RootContainer extends Component {

  
  renderSwitch = () => {
    return  <Switch>
              <Route path="/manager/room" children={<div><InfoTableRoom/></div>}/>
              <Route path="/manager/shift" children={<div><InfoTableShift/></div>}/>
              <Route path="/manager/patient" children={<div><InfoTablePatient/></div>}/>
              <Route path="/manager/user" children={<div><InfoTableUser/></div>}/>
              <Route path="/register" children={<FormRegister />} />
            </Switch>
  }

  renderManager = () => {
    return <Route path="/manager" children={<MenuManager/>} />
  }

  imgArr:string[] =[];
  showMSSV=(ms:string)=>{
    console.log(ms);
  }
  renderImg = () => {
    const classs = "N18DCMR";
    for(let i =1;i<10;i++){
      this.imgArr.push("http://diemtp.ptithcm.edu.vn/images/studen/"+classs+"00"+i+".jpg");
    }
    for(let i =10;i<100;i++){
      this.imgArr.push("http://diemtp.ptithcm.edu.vn/images/studen/"+classs+"0"+i+".jpg");
    }
    for(let i =100;i<300;i++){
      this.imgArr.push("http://diemtp.ptithcm.edu.vn/images/studen/"+classs+i+".jpg");
    }
    return <React.Fragment>{this.imgArr.map((value)=>{
      console.log(value);
      return <img src={value} style={{width:"20%"}} onClick={()=>this.showMSSV(value)}/>})}</React.Fragment>
  }

  render() {
    return (
      <s__.Container>
        <MenuTop />
        {this.renderManager()}
        <s__.MainBlock>
          {this.renderSwitch()}
        </s__.MainBlock>
        {/* {this.renderImg()} */}
      </s__.Container>
    );
  }
}

export default RootContainer;
