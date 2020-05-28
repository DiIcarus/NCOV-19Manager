import React, { Component } from "react";
import * as s__ from "./style";
import {SocketIOClient} from "./../../modules/socketio-client/socketio-client";
import SendIcon from '@material-ui/icons/Send';
import FacebookIcon from '@material-ui/icons/Facebook';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import ChartData from '../ChartData/index';
type State = typeof initState;

const initState = {
  data_vn:{},
  data_glo:{},
  data_all:{},
  data1:{
    header:"This is header",
    xAsis:[1500, 1600, 1700, 1750, 1800, 1850, 1900, 1950, 1999, 2050],
    datas:[{
      labelName:"A",
      data:[86, 114, 106, 106, 107, 111, 133, 221, 783, 2478],
    },{
      labelName:"B",
      data:[282, 350, 411, 502, 635, 809, 947, 1402, 3700, 4267],
    },{
      labelName:"C",
      data:[168, 170, 178, 190, 203, 276, 408, 547, 675, 734],
    },{
      labelName:"D",
      data:[40, 20, 10, 16, 24, 38, 74, 167, 508, 784],
    }]
  }
}
class ChartSection extends Component<{},State>{
  state = initState;
    
  componentDidMount(){
    let socket = new SocketIOClient();
    socket.getDataVN((res:any)=>{
      console.log("SOCKET:",this.state);
      this.setState({
        data_vn:JSON.parse(res),
      })
    });
    socket.getDataGlobal((res:any)=>{
      console.log("SOCKET:",JSON.parse(res),this.state);
      this.setState({
        data_glo: JSON.parse(res),
      })
    });
    socket.getDataAll((res:any)=>{
      console.log("SOCKET:",JSON.parse(res),this.state);
      this.setState({
        data_all: JSON.parse(res),
      })
    });
  }
  render() {
    // data={{dataLine:this.data1}}
    return (
      <s__.Footer>
        <s__.Container>
          <h2>Chart</h2>
          <s__.ChartsPlace>
            <ChartData typeChart="Bar" color={[]} data={this.state.data1}/>
            {/* <ChartData typeChart="Line" color={[]} data={}/> */}
            {/* <ChartData typeChart="Doughnut" color={[]} data={}/> */}
            {/* <ChartData typeChart="Bar" color={[]} data={}/> */}
          </s__.ChartsPlace>
        </s__.Container>
      </s__.Footer>
    );
  }
}

export default ChartSection;
