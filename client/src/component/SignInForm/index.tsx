import React, { Component, ChangeEvent } from "react";
//style importer
import * as s__ from "./style";
//module importer
import APIDemo from "./../../modules/api/fetchAPI";
//component importer
//utils importer
//global store
////init
import { connect } from "react-redux";
import { MainState } from "./../../store/index";
//type importer
import { SignInState } from "./../../store/SignInForm/type";
//action importer
import {
  setIdentityCardSignIn,
  setPasswordSignIn,
  setDisplaySignIn,
} from "./../../store/SignInForm/action";

interface Props {
  SignInState: SignInState;
  setIdentityCardSignIn: typeof setIdentityCardSignIn;
  setPasswordSignIn: typeof setPasswordSignIn;
  setDisplaySignIn: typeof setDisplaySignIn;
}

class SignInForm extends Component<Props, {}> {
  module = new APIDemo();

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
    this.module.userLogin(
      formData,
      (res: any) => {
        console.log(res);
      },
      (err: any) => {
        console.log(err);
      }
    );
  };

  formSignin = () => {
    return (
      <s__.Container>
        <div
          style={{ display: this.props.SignInState.display ? "block" : "none" }}
        >
          <label>CMND:</label>
          <input
            type="text"
            value={this.props.SignInState.identityCard}
            onChange={this.identityChange}
          />
          <label>Password:</label>
          <input
            type="password"
            value={this.props.SignInState.password}
            onChange={this.passwordChange}
          />
          <span onClick={this.signIn}>Sign-In</span>
          <s__.LinkRoute to="/register" onClick={() => this.redirectRegister()}>
            Bạn chưa có tài khoản ?
          </s__.LinkRoute>
          <span onClick={this.formCancel}>Cancel</span>
        </div>
      </s__.Container>
    );
  };

  render() {
    return <React.Fragment>{this.formSignin()}</React.Fragment>;
  }
}

const mapStateToProps = (state: MainState) => ({
  SignInState: state.SignInState,
});

export default connect(mapStateToProps, {
  setIdentityCardSignIn,
  setPasswordSignIn,
  setDisplaySignIn,
})(SignInForm);
