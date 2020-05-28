import React, { Component, ComponentClass } from "react";
//style importer
import * as s__ from "./style";
import { Line, Bar, Doughnut  } from 'react-chartjs-2';

interface Data {
  labelName:string,
  data:number[],
}
interface DataTable{
  header:string,
  xAsis:number[],
  datas:Data[]
}

interface Data1 {
  
  data:number[],
}

interface DataTable1{
  header:string,
  datainfo:string,
  datasets:Data1[],
  label:string[],
}

interface ParentData{
  dataBarDonut?:DataTable1,
  dataLine?:DataTable
}

type ParentDataType = ComponentClass<ParentData>;
// declare const ParentDataType : ParentDataType;  

// interface 
const initState = {

  datasetBarDonut:{
    header:"this is header",
    datainfo:"Population (millions)",
    label: ["Africa","Asia","Europe","Latin America","North America"],
    datasets:[{
      data: [2478, 5267, 734, 784,432],
    }]
  } as DataTable1,

  datasetLineChart:{
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
  } as DataTable
}
type State = typeof initState;
interface Props{
  typeChart: string,
  color: string[],
  data: any,
  // dataBarDonut: DataTable1,
  // dataLine: DataTable
}

class ChartData extends Component<Props,State> {

  state = initState;
  
  ojbectData = (data:number[] = [],LabelName:string = "null",Color:string = "#333")=>{
    return {
      data: data,
      label: LabelName,
      borderColor: Color,
      fill: false
    }
  }

  objectData1 = (data:Data1)=>{
      return {
      label: this.state.datasetBarDonut.datainfo,
      backgroundColor: this.props.color,
      data: data.data
    }
  }

  getData=(typeChart:string)=>{
    switch(typeChart){
      case "Line":
        return this.state.datasetLineChart.datas.map((value:any,index:any)=>this.ojbectData(value.data,value.labelName,this.props.color[index]))
      case "Doughnut":
        return this.state.datasetBarDonut.datasets.map((value:any)=>this.objectData1(value))
      case "Bar":
        return this.state.datasetBarDonut.datasets.map((value:any)=>this.objectData1(value))
    }
  }

  renderChart=(typeChart:string)=>{
    switch(typeChart){
      case "Line":
        return <Line 
        data={{
          labels: this.state.datasetLineChart.xAsis,
          datasets: this.getData(typeChart),
        }}
        options={{
          title: {
            display: true,
            text: this.state.datasetLineChart.header,
          },
          legend: {
            display: true,
            position: "bottom"
          }
        }}
        />;
      case "Doughnut":
        return <Doughnut
        data={{
          labels: this.state.datasetBarDonut.label,
          datasets: this.getData(typeChart)
        }}
        options={{
          title: {
            display: true,
            text: this.state.datasetBarDonut.header
          }
        }}
        />;
      case "Bar":
        return <Bar
          data={{
            labels: this.state.datasetBarDonut.label,
            datasets: this.getData(typeChart)
          }}
          options={{
            legend: { display: false },
            title: {
              display: true,
              text: this.state.datasetBarDonut.header
            }
          }}
        />;
    }
  }

  render() {
    return(
      <s__.Container>
        {this.renderChart(this.props.typeChart)}
      </s__.Container>
    )      
  }
}

export default ChartData;
