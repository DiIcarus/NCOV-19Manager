import React, { Component } from "react";
import * as s__ from "./style";

import SendIcon from '@material-ui/icons/Send';
import FacebookIcon from '@material-ui/icons/Facebook';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import MyComponents from './../GoogleMapReact/index';
import {SocketIOClient} from "./../../modules/socketio-client/socketio-client";

type State = typeof initState;
const initState = {
  listPoint: []
}
class MapSection extends Component<{},State>{
  state = initState
  socketIO = new SocketIOClient();
  componentDidMount(){
    this.socketIO.getDataLocation((res:any) =>{
      console.log("LOCATION:",res.data);
      this.setState({
        listPoint: res.data.gps
      })
    })
  }
  render() {
    return (
      <s__.Footer>
        <s__.Container>
          <MyComponents listPoint={this.state.listPoint}/>
        </s__.Container>
      </s__.Footer>
    );
  }
}

export default MapSection;
