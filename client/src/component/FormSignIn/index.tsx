import React, { Component, ChangeEvent } from "react";
import {withRouter,RedirectProps,RouteProps} from "react-router-dom";
//style importer
import * as s__ from "./style";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import { HoverMode } from "react-particles-js";
//module importer
import UserAPI from "../../modules/api/user";
import DoctorAPI from "../../modules/api/doctor";

//component importer
//utils importer
//global store
////init
import { connect } from "react-redux";
import { MainState } from "../../store/index";
//type importer
import { SignInState } from "../../store/SignInForm/type";
import { UsersState } from "../../store/User/type";
import { UserssignedState } from "../../store/UsersSigned/type";
//action importer
import {
  setIdentityCardSignIn,
  setPasswordSignIn,
  setDisplaySignIn,
} from "../../store/SignInForm/action";
import {
  setAddressUserssigned,
  setAvatarUserssigned,
  setDateofbirthUserssigned,
  setFullnameUserssigned,
  setGPS,
  setGenderUserssigned,
  setIdRoveUserssigned,
  setIdUserssigned,
  setIdentityCardUserssigned,
  setIsActiveUserssigned,
  setPasswordUserssigned,
  setPhonenumberUserssigned,
  setTokenUserssigned,
  setVUserssigned,
  setmailUserssigned,
} from "../../store/UsersSigned/action";
import { setTokenUsers } from "../../store/User/action";
import { Redirect, Route, useHistory } from "react-router-dom";

type Props = {
  SignInState: SignInState,
  setIdentityCardSignIn: typeof setIdentityCardSignIn,
  setPasswordSignIn: typeof setPasswordSignIn,
  setDisplaySignIn: typeof setDisplaySignIn,
  UsersState: UsersState,
  setTokenUsers: typeof setTokenUsers,
  UserssignedState: UserssignedState,
  setAddressUserssigned: typeof setAddressUserssigned,
  setFullnameUserssigned: typeof setFullnameUserssigned,
  setAvatarUserssigned: typeof setAvatarUserssigned,
  setDateofbirthUserssigned: typeof setDateofbirthUserssigned,
  setGenderUserssigned: typeof setGenderUserssigned,
  setGPS: typeof setGPS,
  setIdRoveUserssigned: typeof setIdRoveUserssigned,
  setIdUserssigned: typeof setIdUserssigned,
  setIsActiveUserssigned: typeof setIsActiveUserssigned,
  setPasswordUserssigned: typeof setPasswordUserssigned,
  setPhonenumberUserssigned: typeof setPhonenumberUserssigned,
  setTokenUserssigned: typeof setTokenUserssigned,
  setVUserssigned: typeof setVUserssigned,
  setmailUserssigned: typeof setmailUserssigned,
  setIdentityCardUserssigned: typeof setIdentityCardUserssigned,
};

class FormSignIn extends Component<Props, {}> {
  usersModule = new UserAPI();
  module = new DoctorAPI();
  // history = useHistory();
  componentDidMount=()=>{
    setInterval(()=>{

    //  console.log(this.props.UserssignedState);
    },1000); 
    console.log(this.props.UserssignedState);
 }
  formCancel = () => {
    this.props.setDisplaySignIn(false);
  };

  redirectRegister = () => {
    this.formCancel();
  };

  identityChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.props.setIdentityCardSignIn(event.target.value);
  };

  passwordChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.props.setPasswordSignIn(event.target.value);
  };

  signIn = () => {
    const formData = new FormData();
    formData.append("identityCard", this.props.SignInState.identityCard);
    formData.append("password", this.props.SignInState.password);
    let token:string = '';
    this.module.userLogin(
      formData,
      (res: any) => {
        console.log(res); //set users token
        this.props.setTokenUsers(res.data.token);
        this.props.setTokenUserssigned(res.data.token);
        window.sessionStorage.accessToken = res.data.token;
        this.usersModule.getProfile(
        res.data.token,
        (res: any) => {
        console.log(res.data.user);
        this.props.setDisplaySignIn(true);
        this.props.setAvatarUserssigned(res.data.user.avatars);
        this.props.setAddressUserssigned(res.data.user.address);
        this.props.setGenderUserssigned(res.data.user.gender);
        this.props.setIsActiveUserssigned(res.data.user.isActive);
        this.props.setGPS(res.data.user.gps);
        this.props.setIdUserssigned(res.data.user._id);
        this.props.setPasswordUserssigned(res.data.user.password);
        this.props.setPhonenumberUserssigned(res.data.user.phoneNumber);
        this.props.setIdentityCardUserssigned(res.data.user.identityCard);
        this.props.setFullnameUserssigned(res.data.user.fullName);
        this.props.setmailUserssigned(res.data.user.email);
        this.props.setIdRoveUserssigned(res.data.user.idRole);
        this.props.setVUserssigned(res.data.user.__v);
        this.props.setDateofbirthUserssigned(res.data.user.dateOfBirth)
        localStorage.setItem('UsersInfo',JSON.stringify(res.data.user));
        window.sessionStorage.setItem('UsersInfo',JSON.stringify(res.data.user));
        alert("Login successful!!")
        },
        (err: any) => {
        console.log(err);
        }
      );    
      },
      (err: any) => {
        console.log(err);
      }
    );
    // this.props.history.
  };

  formSigninDemo = () => {
    return (
      <React.Fragment>
        <s__.SignInArea>
          <h2>Sign up</h2>
          <s__.TextFieldArea>
            <s__.TextInput
              variant="outlined"
              required
              id="CMND"
              label="CMND"
              name="CMND"
              autoComplete="CMND"
              value={this.props.SignInState.identityCard}
              onChange={this.identityChange}
            /></s__.TextFieldArea>
            <s__.TextFieldArea>
            <s__.TextInput
              variant="outlined"
              required
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={this.props.SignInState.password}
              onChange={this.passwordChange}
            /></s__.TextFieldArea>
                <s__.ButtonSignIn
            variant="contained"
            color="primary"
            onClick={this.signIn}
          >
            Sign In
          </s__.ButtonSignIn>
          <s__.LinkRoute
            to="/register"
            // onClick={() => this.redirectRegister()}
          >
            Register ?
          </s__.LinkRoute>
        </s__.SignInArea>
      </React.Fragment>
    );
  };

  // formSignin = () => {
  //   return (
  //     <s__.Container
  //       style={{ display: this.props.SignInState.display ? "block" : "none" }}
  //     >
  //       <s__.TextFieldArea>
  //         <s__.TextInput
  //           variant="outlined"
  //           label="CMND"
  //           type="text"
  //           value={this.props.SignInState.identityCard}
  //           onChange={this.identityChange}
  //         />
  //       </s__.TextFieldArea>
  //       <s__.TextFieldArea>
  //         <s__.TextInput
  //           variant="outlined"
  //           label="Password"
  //           type="password"
  //           value={this.props.SignInState.password}
  //           onChange={this.passwordChange}
  //         />
  //       </s__.TextFieldArea>
  //       <s__.ButtonArea>
  //         <s__.ButtonSignIn
  //           variant="outlined"
  //           color="primary"
  //           size="large"
  //           onClick={this.signIn}
  //         >
  //           Sign-In
  //         </s__.ButtonSignIn>
  //       </s__.ButtonArea>
  //       <s__.LinkRoute to="/register" onClick={() => this.redirectRegister()}>
  //         <s__.ButtonArea>
  //           <s__.ButtonSignIn variant="outlined" color="primary" size="large">
  //             Bạn chưa có tài khoản ?
  //           </s__.ButtonSignIn>
  //         </s__.ButtonArea>
  //       </s__.LinkRoute>
  //       <s__.ButtonArea>
  //         <s__.ButtonSignIn
  //           variant="outlined"
  //           color="primary"
  //           size="large"
  //           onClick={this.formCancel}
  //         >
  //           Cancel
  //         </s__.ButtonSignIn>
  //       </s__.ButtonArea>
  //     </s__.Container>
  //   );
  // };
  renderBackground = () => {
    return (
      <s__.Particless
        params={{
          particles: {
            number: {
              value: 50,
            },
            size: {
              value: 1.3,
              anim: {
                speed: 1,
                size_min: 0.8,
              },
            },
            line_linked: {
              enable: false,
              blink: true,
              width: 1,
            },
            color: {
              value: "#fff",
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "connect" as HoverMode,
              },
            },
            modes: {
              connect: {
                distance: 50,
                radius: 50,
                lineLinked: {
                  opacity: 0.2,
                },
              },
            },
          },
        }}
      />
    );
  };

  render() {
    return (
      <s__.Footer>
      {this.renderBackground()}
        <s__.Container
          style={{ display: this.props.SignInState.display ? "flex" : "none" }}
        >
          {this.formSigninDemo()}
        </s__.Container>
      </s__.Footer>
        
    );
  }
}

const mapStateToProps = (state: MainState) => ({
  SignInState: state.SignInState,
  UserssignedState: state.UserssignedState,
  UsersState: state.UsersState,
});

export default connect(mapStateToProps, {
  setIdentityCardSignIn,
  setPasswordSignIn,
  setDisplaySignIn,
  setTokenUsers,
  setAddressUserssigned,
  setAvatarUserssigned,
  setDateofbirthUserssigned,
  setFullnameUserssigned,
  setGPS,
  setGenderUserssigned,
  setIdRoveUserssigned,
  setIdUserssigned,
  setIdentityCardUserssigned,
  setIsActiveUserssigned,
  setPasswordUserssigned,
  setPhonenumberUserssigned,
  setTokenUserssigned,
  setVUserssigned,
  setmailUserssigned,
})(FormSignIn);
