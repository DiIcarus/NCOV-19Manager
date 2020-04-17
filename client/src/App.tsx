import React from 'react';
import './App.css';


import Header from './component/Header/index';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";

interface Props{

}

type State = typeof initState;

const initState = {
  string: "Hello my friend" as string
}

class App extends React.Component<Props,State>{
  state= initState;


  renderSwitch = () => {
    return <Switch>
            <Route exact path="/">
              <div>/</div>
            </Route>
            <Route path="/about-us">
              <div>/about-us</div>
            </Route>
            <Route path="/documents">
              <div>/documents</div>
            </Route>
            <Route path="/git">
              <div>/git</div>
            </Route>
          </Switch>
  }

  render(){
    return(
      <BrowserRouter>
        <div className="App">
          <Header/>
        </div>
        {this.renderSwitch()}
      </BrowserRouter>
      
    );
  }
}

export default App;
