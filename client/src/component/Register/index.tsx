import React, { Component, ChangeEvent } from "react";
import { Link, Route } from "react-router-dom";
//style importer
import * as style__ from "./style";
//component importer

//import module
import APIDemo from "../../modules/api/fetchAPI";

//utils importer
//global store
//init
import { connect } from "react-redux";
import { MainState } from "./../../store/index";
//type
import { RegisterState } from "./../../store/RegisterForm/type";
//action
import {
  setAddressRegister,
  setDateOfBirthRegister,
  setDisplaySignIn,
  setEmailRegister,
  setFullnameRegister,
  setIdentityCardRegister,
  setNumberRegister,
  setPasswordRegister,
} from "./../../store/RegisterForm/action";

interface Props {
  RegisterState: RegisterState;
  setAddressRegister: typeof setAddressRegister;
  setDateOfBirthRegister: typeof setDateOfBirthRegister;
  setDisplaySignIn: typeof setDisplaySignIn;
  setEmailRegister: typeof setEmailRegister;
  setFullnameRegister: typeof setFullnameRegister;
  setIdentityCardRegister: typeof setIdentityCardRegister;
  setNumberRegister: typeof setNumberRegister;
  setPasswordRegister: typeof setPasswordRegister;
}

class RegisterForm extends Component<Props, {}> {
  module = new APIDemo();

  onchangeAdress = (event: ChangeEvent<HTMLInputElement>) => {
    this.props.setAddressRegister(event.target.value);
  };

  onchangeDateOfBirth = (event: ChangeEvent<HTMLInputElement>) => {
    this.props.setDateOfBirthRegister(event.target.value);
  };

  onchangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    this.props.setEmailRegister(event.target.value);
  };

  onchangeIdentityCard = (event: ChangeEvent<HTMLInputElement>) => {
    this.props.setIdentityCardRegister(event.target.value);
  };

  onchangeFullname = (event: ChangeEvent<HTMLInputElement>) => {
    this.props.setFullnameRegister(event.target.value);
  };

  onchangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    this.props.setPasswordRegister(event.target.value);
  };

  onchangeNumber = (event: ChangeEvent<HTMLInputElement>) => {
    this.props.setNumberRegister(event.target.value);
  };

  handleRegister = () => {
    const formdata = new FormData();
    formdata.append("address", this.props.RegisterState.address);
    formdata.append("password", this.props.RegisterState.password);
    formdata.append("phoneNumber", this.props.RegisterState.phoneNumber);
    formdata.append("dateOfBirth", this.props.RegisterState.dateOfBirth);
    formdata.append("identityCard", this.props.RegisterState.identityCard);
    formdata.append("fullName", this.props.RegisterState.fullName);
    formdata.append("email", this.props.RegisterState.email);
    console.log(formdata);
    this.module.userRegister(
      formdata,
      (res: any) => {
        console.log(res);
      },
      (err: any) => {
        console.log(err);
      }
    );
  };

  formRegister = () => {
    return (
      <Route path="/register">
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
          }}
        >
          <label>
            {"Họ và tên:"}
            <input
              id="Fullname"
              type="text"
              value={this.props.RegisterState.fullName}
              placeholder=""
              onChange={this.onchangeFullname}
            />
          </label>

          <label>
            {"CMND: "}
            <input
              id="IdentityCard"
              type="text"
              value={this.props.RegisterState.identityCard}
              onChange={this.onchangeIdentityCard}
            />
          </label>

          <label>
            {"Ngày sinh: "}
            <input
              id="DateOfBirth"
              type="text"
              value={this.props.RegisterState.dateOfBirth}
              onChange={this.onchangeDateOfBirth}
            />
          </label>

          <label>
            {"Email: "}
            <input
              id="Email"
              type="text"
              value={this.props.RegisterState.email}
              onChange={this.onchangeEmail}
            />
          </label>

          <label>
            {"Địa chỉ: "}
            <input
              id="Address"
              type="text"
              value={this.props.RegisterState.address}
              onChange={this.onchangeAdress}
            />
          </label>

          <label>
            {"Số điện thoại: "}
            <input
              id="Number"
              type="text"
              value={this.props.RegisterState.phoneNumber}
              onChange={this.onchangeNumber}
            />
          </label>

          <label>
            {"Password: "}
            <input
              id="Password"
              type="password"
              value={this.props.RegisterState.password}
              onChange={this.onchangePassword}
            />
          </label>

          <span onClick={() => this.handleRegister()}>Đăng ký</span>
        </div>
      </Route>
    );
  };

  render() {
    return <React.Fragment>{this.formRegister()}</React.Fragment>;
  }
}

const mapStateToProps = (state: MainState) => ({
  RegisterState: state.RegisterState,
});
export default connect(mapStateToProps, {
  setAddressRegister,
  setDateOfBirthRegister,
  setDisplaySignIn,
  setEmailRegister,
  setFullnameRegister,
  setIdentityCardRegister,
  setNumberRegister,
  setPasswordRegister,
})(RegisterForm);
