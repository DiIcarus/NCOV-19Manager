import React, { Component } from "react";
import * as s__ from "./style";

import SendIcon from '@material-ui/icons/Send';
import FacebookIcon from '@material-ui/icons/Facebook';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import MyComponents from './../GoogleMapReact/index';
import {SocketIOClient} from "./../../modules/socketio-client/socketio-client";

interface Location{
  x:number,
  y:number
}
type State = typeof initState;
const initState = {
  listPoint: [] as Location[]
}
class MapSection extends Component<{},State>{
  state = initState
  
  componentDidMount(){
    let socketIO = new SocketIOClient();
    let arr = []
    socketIO.getDataLocation((res:any) =>{
      console.log("LOCATION:",res);
      console.log("LOCATION:",res.map((value:any) => (value.location)));
      // this.setState({
      //   listPoint: res.map((value:any) => (value.location))
      // })
    })
    
    // setInterval(()=>{
    //   console.log("LISTSTATE",this.state.listPoint);
    // },2000)
  }
  renderMap = ()=>{
    return <MyComponents listPoint={this.state.listPoint}/>
  }
  renderEmptyMap = () =>{
    return <MyComponents listPoint={[]}/>
  }
  setLocation = () =>{
    this.setState({
      listPoint: [{x:+"106.79663",y:+"10.84811"},{x:+"106.79663",y:+"106.79663"}]
    })
  }
  render() {
    // console.log("MOUNT")
    return (
      <s__.Footer>
        <s__.Container>
          {/* <button onClick={this.setLocation}>Click</button> */}
          {this.state.listPoint?this.renderMap():this.renderEmptyMap()}
        </s__.Container>
      </s__.Footer>
    )
  }
}

export default MapSection;
