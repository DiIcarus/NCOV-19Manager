import React, { Component } from "react";
//style importer
import * as s__ from "./style";
//component importer
import SignInForm from "../SignInForm/index";
//utils importer
//global store
import {connect} from "react-redux";
import {MainState} from "./../../store/index";
//type
import {SignInState} from "./../../store/SignInForm/type";
//action
import {setDisplaySignIn} from "./../../store/SignInForm/action";
interface Props {
  SignInState:SignInState
  setDisplaySignIn: typeof setDisplaySignIn
}

class UsersComponent extends Component<Props,{}> {

  formDisplay = () => {
    this.props.setDisplaySignIn(true);
	};
	
  renderSignInForm = () => {
    return (
      <SignInForm
      />
    );
  };

  renderUsersArea = () => {
    return (
      <s__.Container onClick={this.formDisplay}>
					<s__.HeaderBtn>Sign in</s__.HeaderBtn>
      </s__.Container>
    );
  };

  render() {
    return (
      <React.Fragment>
        {this.renderUsersArea()}
        {this.renderSignInForm()}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state:MainState) =>({
  SignInState:state.SignInState
});

export default connect(mapStateToProps,{setDisplaySignIn})(UsersComponent);
