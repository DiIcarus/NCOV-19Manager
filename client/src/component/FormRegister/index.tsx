import React, { Component, ChangeEvent } from "react";
import { Route } from "react-router-dom";
//style importer
import * as style__ from "./style";
//component importer

//import module
import APIDemo from "../../modules/api/doctor";
/////


/////
//utils importer
//global store
//init
import { connect } from "react-redux";
import { MainState } from "../../store/index";
//type
import { RegisterState } from "../../store/RegisterForm/type";
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
} from "../../store/RegisterForm/action";

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

class FormRegister extends Component<Props, {}> {
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
        <style__.Container>
          <style__.TextFieldArea>
            <style__.TextInput
              variant="outlined"
              label="Fullname"
              id="Fullname"
              type="text"
              value={this.props.RegisterState.fullName}
              placeholder=""
              onChange={this.onchangeFullname}
            />
          </style__.TextFieldArea>
          <style__.TextFieldArea>
            <style__.TextInput
              variant="outlined"
              label="IdentityCard"
              id="IdentityCard"
              type="text"
              value={this.props.RegisterState.identityCard}
              onChange={this.onchangeIdentityCard}
            />
          </style__.TextFieldArea>
          <style__.TextFieldArea>
            <style__.TextInput
              variant="outlined"
              label="DateOfBirth"
              id="DateOfBirth"
              type="text"
              value={this.props.RegisterState.dateOfBirth}
              onChange={this.onchangeDateOfBirth}
            />
          </style__.TextFieldArea>
          <style__.TextFieldArea>
            <style__.TextInput
              variant="outlined"
              label="Email"
              id="Email"
              type="text"
              value={this.props.RegisterState.email}
              onChange={this.onchangeEmail}
            />
          </style__.TextFieldArea>
          <style__.TextFieldArea>
            <style__.TextInput
              variant="outlined"
              label="Address"
              id="Address"
              type="text"
              value={this.props.RegisterState.address}
              onChange={this.onchangeAdress}
            />
          </style__.TextFieldArea>
          <style__.TextFieldArea>
            <style__.TextInput
              variant="outlined"
              label="Number"
              id="Number"
              type="text"
              value={this.props.RegisterState.phoneNumber}
              onChange={this.onchangeNumber}
            />
          </style__.TextFieldArea>
          <style__.TextFieldArea>
            <style__.TextInput
              variant="outlined"
              label="Password"
              id="Password"
              type="password"
              value={this.props.RegisterState.password}
              onChange={this.onchangePassword}
            />
          </style__.TextFieldArea>
          <style__.ButtonRegister
            variant="outlined" 
            color="primary"
            size="large"
            onClick={() => this.handleRegister()}
          >Đăng ký
          </style__.ButtonRegister>
        </style__.Container>
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
})(FormRegister);
