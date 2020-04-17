import React,{Component} from 'react';
//style importer
import * as style__ from './style';
//component importer
import SignInForm from '../SignInForm/index';
//utils importer

type State = typeof initState;

const initState = {
  status: false as boolean
}

class UsersComponent extends Component<{},State>{

    state = initState

    formDisplay = (status:boolean) => {
        this.setState({
            status
        })
    }
    renderSignInForm = () => {
        return  <SignInForm isFormDisPlay={this.formDisplay} stateUser={this.state.status}/>
    }

    renderUsersArea = () =>{
        return  <style__.Container onClick={()=>this.formDisplay(!this.state.status)}>
                    <button>Sign in</button>
                </style__.Container>
    }

    render(){
        return (
            <React.Fragment>
                {this.renderUsersArea()}
                {this.state.status ? this.renderSignInForm():<React.Fragment />}
            </React.Fragment>
        )
    }
}

export default UsersComponent;

