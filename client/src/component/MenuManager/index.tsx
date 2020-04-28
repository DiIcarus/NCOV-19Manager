import React, { Component } from "react";
//style importer
import * as s__ from "./style";

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import PeopleIcon from '@material-ui/icons/People';
import AddBoxIcon from '@material-ui/icons/AddBox';
//import component
import NewsCard from '../CardNews/index';
import { Route, Link } from "react-router-dom";
import { HoverMode } from 'react-particles-js';
import { List } from "@material-ui/core";

class MenuManager extends Component<{}, {}> {

  imgArr:string[] =[];
  renderPatientManager=()=>{
    return (
      <s__.ListMenu>
        <List>
        <s__.ListItems button>
          <ListItemIcon>
            <DashboardIcon style={{color:"white"}}/>
          </ListItemIcon>
          <s__.LinkChild to="/manager/room"><ListItemText disableTypography={true} primary="Rooms" /></s__.LinkChild>
        </s__.ListItems>
        <s__.ListItems button>
          <ListItemIcon>
            <WatchLaterIcon style={{color:"white"}}/>
          </ListItemIcon>
          <s__.LinkChild to="/manager/shift"><ListItemText primary="Shifts" /></s__.LinkChild>
        </s__.ListItems>
        <s__.ListItems button>
          <ListItemIcon>
            <PermContactCalendarIcon style={{color:"white"}}/>
          </ListItemIcon>
          <s__.LinkChild to="/manager/patient"><ListItemText primary="Patients" /></s__.LinkChild>
        </s__.ListItems>
        <s__.ListItems button>
          <ListItemIcon>
            <PeopleIcon style={{color:"white"}}/>
          </ListItemIcon>
          <s__.LinkChild to="/manager/user"><ListItemText primary="User" /></s__.LinkChild>
        </s__.ListItems>
        <s__.ListItems button>
          <ListItemIcon>
            <AddBoxIcon style={{color:"white"}}/>
          </ListItemIcon>
          <s__.LinkChild to="/manager/post"><ListItemText primary="Create Post" /></s__.LinkChild>
        </s__.ListItems>  
        </List>
      </s__.ListMenu>
    )
  }

  showMSSV=(ms:string)=>{
    console.log(ms);
  }
  renderImg = () => {
    for(let i =1;i<10;i++){
      this.imgArr.push("http://diemtp.ptithcm.edu.vn/images/studen/N19DCMR00"+i+".jpg");
    }
  return <>{this.imgArr.map((value)=>{
    console.log(value);
    return <img src={value}  onClick={()=>this.showMSSV(value)}/>})}</>
  }

  renderBackground = () => {
    return <s__.Particless params={{
      "particles": {
          "number": {
              "value": 50
          },
          "size": {
              "value": 1.3,
              "anim": {
                "speed": 1,
                "size_min": 0.8
            }
          },
          "line_linked": {
            "enable": false,
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
                  "distance": 50,
                  "radius"	:	50,
                  "lineLinked":{
                    "opacity":0.2
                  }
              }
          }
      }
    }}/>
  }
  render() {
    return  (
      <s__.Container>
        {this.renderBackground()}
        {this.renderPatientManager()}
        {/* {this.renderImg()} */}
      </s__.Container>
    )
  }
}

export default MenuManager;
