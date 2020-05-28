import { HoverMode } from "react-particles-js";
import React, { Component, ChangeEvent } from "react";
import { Redirect, Route } from "react-router-dom";
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

class AboutUs extends Component<Props, {}> {
  module = new APIDemo();


  formRegister = () => {
    return (
      <Route path="/about-us">
        <style__.Footer>
        {this.renderBackground()}
        <style__.Container>
        </style__.Container>
        </style__.Footer>
      </Route>
    );
  };

  renderBackground = () => {
    return (
      <style__.Particless
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
      <React.Fragment>
        {this.formRegister()}
      </React.Fragment>
    );
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
})(AboutUs);
