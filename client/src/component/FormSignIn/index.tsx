import React, { Component, ChangeEvent } from "react";

//style importer
import * as s__ from "./style";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

//module importer
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
//action importer
import {
  setIdentityCardSignIn,
  setPasswordSignIn,
  setDisplaySignIn,
} from "../../store/SignInForm/action";
import {
  setTokenUsers
} from "../../store/User/action";


interface Props {
  SignInState: SignInState;
  setIdentityCardSignIn: typeof setIdentityCardSignIn;
  setPasswordSignIn: typeof setPasswordSignIn;
  setDisplaySignIn: typeof setDisplaySignIn;
  UsersState:UsersState;
  setTokenUsers: typeof setTokenUsers;
}

class FormSignIn extends Component<Props, {}> {
  module = new DoctorAPI();

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
        console.log(res);//set users token
        this.props.setTokenUsers(res.data.token);
      },
      (err: any) => {
        console.log(err);
      }
    );
  };


  formSigninDemo = () => {
    return (
    <s__.Container
      style={{ display: this.props.SignInState.display ? "block" : "none" }}
    >
    <div>
      <Typography component="h1" variant="h5">
        Sign up
      </Typography>
      <div>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="CMND"
              label="CMND"
              name="CMND"
              autoComplete="CMND"
              value={this.props.SignInState.identityCard}
              onChange={this.identityChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={this.props.SignInState.password}
              onChange={this.passwordChange}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={<s__.LinkRoute 
                to="/register" 
                onClick={() => this.redirectRegister()} />}
              label="Register ?"
            />
          </Grid>
        </Grid>
        <Button
          fullWidth
          variant="contained"
          color="primary"
          onClick={this.signIn}
        >
          Sign In
        </Button>
        <hr></hr>
        <Button
            fullWidth
            variant="contained"
            color="primary"
            size="large"
            onClick={this.formCancel}
          >
          Cancel
        </Button>
      </div>
    </div>
  </s__.Container>)
  }

  formSignin = () => {
    return (
      <s__.Container style={{ display: this.props.SignInState.display ? "block" : "none" }}>
        <s__.TextFieldArea
          
        >
          <s__.TextInput
            variant="outlined"
            label="CMND"
            type="text"
            value={this.props.SignInState.identityCard}
            onChange={this.identityChange}
          />
        </s__.TextFieldArea>
        <s__.TextFieldArea>
          <s__.TextInput
            variant="outlined"
            label="Password"
            type="password"
            value={this.props.SignInState.password}
            onChange={this.passwordChange}
          />
        </s__.TextFieldArea>
        <s__.ButtonArea>
          <s__.ButtonSignIn
            variant="outlined" 
            color="primary"
            size="large"
            onClick={this.signIn}>Sign-In
          </s__.ButtonSignIn>
        </s__.ButtonArea>
        <s__.LinkRoute to="/register" onClick={() => this.redirectRegister()}>
          <s__.ButtonArea>
            <s__.ButtonSignIn
              variant="outlined" 
              color="primary"
              size="large"
            >
            Bạn chưa có tài khoản ?
            </s__.ButtonSignIn>
          </s__.ButtonArea>
        </s__.LinkRoute>
        <s__.ButtonArea>
          <s__.ButtonSignIn
              variant="outlined" 
              color="primary"
              size="large"
              onClick={this.formCancel}
            >
          Cancel
          </s__.ButtonSignIn>
        </s__.ButtonArea>
      </s__.Container>
    );
  };

  render() {
    return <React.Fragment>{this.formSigninDemo()}</React.Fragment>;
  }
}

const mapStateToProps = (state: MainState) => ({
  SignInState: state.SignInState,
  UsersState: state.UsersState
});

export default connect(mapStateToProps, {
  setIdentityCardSignIn,
  setPasswordSignIn,
  setDisplaySignIn,
  setTokenUsers,
})(FormSignIn);
