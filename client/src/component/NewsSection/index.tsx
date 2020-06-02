import React, { Component } from "react";
import * as s__ from "./style";

import SendIcon from '@material-ui/icons/Send';
import FacebookIcon from '@material-ui/icons/Facebook';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import CardNews from "../CardNews/index";
import { HoverMode } from 'react-particles-js';
class NewsSection extends Component{
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
  render() {
    return (
      <s__.Footer>
        {this.renderBackground()}
        
        <s__.Container>
          <s__.InfoWrap>
            {[...Array(8).keys()].map(value => <CardNews key={value}/>)}
            {/* <CardNews />
            <CardNews />
            <CardNews />
            <CardNews />
            <CardNews />
            <CardNews />
            <CardNews />
            <CardNews /> */}
          </s__.InfoWrap>
        </s__.Container>
      </s__.Footer>
    );
  }
}

export default NewsSection;
