import React from 'react';
import './App.css';
import {
  BrowserRouter,
} from "react-router-dom";

import RootContainer from './component/RootContainer/index';


class App extends React.Component{
  render(){
    return (
      <BrowserRouter>
        <RootContainer/>
      </BrowserRouter>
    )
  }
}

export default App; 
