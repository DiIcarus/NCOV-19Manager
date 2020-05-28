import React, { Component } from "react";
import * as s__ from "./style";
import MenuManager from "./../MenuManager/index";
import InfoTableRoom from "./../InfoTableRoom/index";
import InfoTablePatient from "../InfoTablePatient/index";
import InfoTableShift from "./../InfoTableShift/index";
import InfoTableUser from "../InfoTableUser/index";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { HoverMode } from 'react-particles-js';
import JWT from 'jwt-client';
class ManagerComponent extends Component{

  renderBackground = () => {
    return  <s__.Particless params={{
      "particles": {
          "number": {
              "value": 100
          },
          "size": {
              "value": 0.3,
              "anim": {
                "speed": 1,
                "size_min": 0.8
            }
          },
          "line_linked": {
            "enable": true,
            "blink": true,
            "width":1
          },
          "color":{
            "value":"#fff"
          }
      },
      "interactivity": {
          "events": {
              "onhover": {
                  "enable": true,
                  "mode": "connect" as HoverMode
              }
          },
          "modes": {
              "connect": {
                  "distance": 20,
                  "radius"	:	20,
                  "lineLinked":{
                    "opacity":0.2
                  }
              }
          }
      }
    }}/>
 }
  renderSwitch=()=>{
    let roldename = JWT.read(window.sessionStorage.accessToken).claim.roleName;
    return ((roldename==='BAC_SI' || roldename==="SUPER_ADMIN")?<Switch>
      <Route path="/manager/room" children={ <InfoTableRoom />}/>
      <Route path="/manager/shift" children={ <InfoTableShift />}/>
      <Route path="/manager/patient" children={ <InfoTablePatient /> }/>
      {roldename==="SUPER_ADMIN"?<Route path="/manager/user" children={ <InfoTableUser />}/>:<React.Fragment></React.Fragment>}
    </Switch>:<React.Fragment></React.Fragment>)
  }
  render() {
    return (
      <s__.Footer>
        {this.renderBackground()}
        <s__.Container>
          
          {window.sessionStorage.accessToken?this.renderSwitch():<div className="page-not-found">404 Page not found</div>}
        </s__.Container>
      </s__.Footer>
    );
  }
}

export default ManagerComponent;
