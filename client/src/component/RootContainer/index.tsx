import React, { Component } from "react";
import * as s__ from "./style";
import MenuTop from "./../MenuTop/index";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import FormRegister from "./../FormRegister/index";
import FormSignin from "./../FormSignIn/index";
import MenuManager from "./../MenuManager/index";
import InfoTableRoom from "./../InfoTableRoom/index";
import InfoTablePatient from "../InfoTablePatient/index";
import InfoTableShift from "./../InfoTableShift/index";
import InfoTableUser from "../InfoTableUser/index";
import  { MainState } from '../../store/index';
import {connect} from 'react-redux';
import {UserssignedState} from '../../store/UsersSigned/type';
type Props = {
  UserssignedState: UserssignedState
}
class RootContainer extends Component {
  componentDidMount(){
    window.localStorage.setItem('UsersInfo',JSON.stringify(""));
    // setInterval(()=>{
    //   //undefine
    //   // let str = 
    //   let a:object = JSON.parse( String(window.localStorage.getItem('UsersInfo')));
    //   console.log(a)
    //   console.log(window.sessionStorage.accessToken)
    // },2000);
  }
  renderSwitch = () => {
    return (
      <Switch>
        <Route
          path="/manager/room"
          children={
            <div>
              <InfoTableRoom />
            </div>
          }
        />
        <Route
          path="/manager/shift"
          children={
            <div>
              <InfoTableShift />
            </div>
          }
        />
        <Route
          path="/manager/patient"
          children={
            <div>
              <InfoTablePatient />
            </div>
          }
        />
        <Route
          path="/manager/user"
          children={
            <div>
              <InfoTableUser />
            </div>
          }
        />

        <Route path="/register" children={<FormRegister />} />
        <Route path="/signin" children={<FormSignin />} />
      </Switch>
    );
  };

  renderManager = () => {
    return <Route path="/manager" children={<MenuManager />} />;
  };

  // imgArr: string[] = [];
  // showMSSV = (ms: string) => {
  //   console.log(ms);
  // };
  // renderImg = () => {
  //   const classs = "N18DCMR";
  //   for (let i = 1; i < 10; i++) {
  //     this.imgArr.push(
  //       "http://diemtp.ptithcm.edu.vn/images/studen/" +
  //         classs +
  //         "00" +
  //         i +
  //         ".jpg"
  //     );
  //   }
  //   for (let i = 10; i < 100; i++) {
  //     this.imgArr.push(
  //       "http://diemtp.ptithcm.edu.vn/images/studen/" +
  //         classs +
  //         "0" +
  //         i +
  //         ".jpg"
  //     );
  //   }
  //   for (let i = 100; i < 300; i++) {
  //     this.imgArr.push(
  //       "http://diemtp.ptithcm.edu.vn/images/studen/" + classs + i + ".jpg"
  //     );
  //   }
  //   return (
  //     <React.Fragment>
  //       {this.imgArr.map((value) => {
  //         console.log(value);
  //         return (
  //           <img
  //             src={value}
  //             style={{ width: "20%" }}
  //             onClick={() => this.showMSSV(value)}
  //           />
  //         );
  //       })}
  //     </React.Fragment>
  //   );
  // };

  render() {
    return (
      <s__.Container>
        <MenuTop />
        {this.renderManager()}
        <s__.MainBlock >{this.renderSwitch()}</s__.MainBlock>
        {/* {this.renderImg()} */}
      </s__.Container>
    );
  }
}

const mapStateToProps = (state:MainState) => ( {
  UserssignedState: state.UserssignedState

})
export default connect(mapStateToProps,{})(RootContainer);
