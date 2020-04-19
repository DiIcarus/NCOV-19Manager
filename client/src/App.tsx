import React from 'react';
import './App.css';

//import utils

//react-router-dom
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";

//component importer
import Header from './component/Header/index';
import RegisterForm from './component/Register/index';
//global store
////init
import {connect} from 'react-redux';
import {MainState} from './store/index';

////type importer
import {AppState} from './store/App/type';

////action importer
import {setExpanded} from './store/App/action';

interface Props{
  AppState: AppState,
  setExpanded: typeof setExpanded
}

type State = typeof initState;

const initState = {
  string: "Hello my friend" as string
}

class App extends React.Component<Props,State>{
  state= initState;


  renderSwitch = () => {
    return  <Switch>
              <Route exact path="/" children={<h1>Body/ Component</h1>} />
              <Route path="/about-us" children={<h1>Body/ Component about-us</h1>} />
              <Route path="/documents" children={<h1>Body/ Component documents</h1>} />
              <Route path="/git" children={<h1>Body/ Component git</h1>} />
              <Route path="/register" children={<RegisterForm />} />
              <Route path="/sign-in" children={<h1>Body/ Component sign in</h1>} />
            </Switch>
  }

  renderMain = () => {
    return  <React.Fragment>
              <div className="App">
                <Header/>
                <div style={{paddingTop:"50px",textAlign:"left"}}>{this.renderSwitch()}</div>
              </div>
            </React.Fragment>
  }

  render(){
    return <BrowserRouter>
            {this.renderMain()}
          </BrowserRouter>
  }
}

const mapStateToProps = (state:MainState)=> ({
	AppState: state.AppState
});

export default connect(mapStateToProps,{setExpanded})(App); 
