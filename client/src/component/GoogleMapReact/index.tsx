import React, { Component } from "react";
import OlMap from "ol/Map";
import OlView from "ol/View";
import OlLayerTile from "ol/layer/Tile";
import OlSourceOSM from "ol/source/OSM";
import {OSM, Vector as VectorSource} from 'ol/source';
import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer';
import {Draw,Snap} from 'ol/interaction';
import {LineString, Point, Polygon} from 'ol/geom';
import {Fill, Icon, Stroke, Style, Circle,} from 'ol/style';
import GeometryType from "ol/geom/GeometryType";
import ol, { Feature } from "ol";
import IconAnchorUnits from "ol/style/IconAnchorUnits";
import {fromLonLat} from 'ol/proj';
import LayerGroup from 'ol/layer/Group';
import Collection from 'ol/Collection';
type State = typeof initState;
const initState = {
  center: fromLonLat([106.79666,10.84811]),
  zoom: 15,
  feature: [] as Feature<Point>[],
  olmap: new OlMap({
      target: undefined,
      layers: [new TileLayer({source: new OSM()}),
        new VectorLayer({
          source: new VectorSource({
            features: [new Feature(new Point([106.79663935413441,10.84811849654838])),new Feature(new Point([100123,10600]))],
          }),
          style: new Style({
            image: new Icon({
              anchor: [0.5, 46],
              anchorXUnits: IconAnchorUnits.FRACTION,
              anchorYUnits: IconAnchorUnits.PIXELS,
              opacity: 0.95,
              src: 'https://img.icons8.com/color/search'
            }),
          })
        })
      ],
      view: new OlView({
        center: [0,0],
        zoom: 1
      }),
  })
}

interface Location{
  x:number,
  y:number
}
interface Props{
  listPoint:Location[]
}
class MyComponents extends Component<Props,State> {
  state = initState;
  raster = new TileLayer({
    source: new OSM()
  });

  // source = new VectorSource({wrapX: false});
  // vector = new VectorLayer({
  //   source: this.source
  // });
  
  olmap:OlMap = new OlMap({
      target: undefined,
      layers: [this.raster,
        new VectorLayer({
          source: new VectorSource({
            // features: this.props.listPoint.map((value)=>(new Feature(new Point(fromLonLat([+value.x,+value.y]))))),
            features: [new Feature(new Point((this.state.center)))]
          }),
          style: new Style({
            image: new Icon({
              anchor: [0.5, 46],
              anchorXUnits: IconAnchorUnits.FRACTION,
              anchorYUnits: IconAnchorUnits.PIXELS,
              opacity: 0.95,
              src: "https://img.icons8.com/doodle/48/000000/user-location.png"
            }),
          })
        })
      ],
      view: new OlView({
        center: this.state.center,
        zoom: this.state.zoom
      }),
  })

  vector:VectorLayer = new VectorLayer();
  reload() {
    let vectorSource = new VectorSource({
      features: this.props.listPoint.map((value)=>(new Feature(new Point(fromLonLat([+value.x,+value.y])))))
    })

    let newLayer = new VectorLayer({
      source: vectorSource
    });
    this.olmap.addLayer(newLayer);
    vectorSource.once('change', ()=> {
      console.log('remove')
      if (this.vector) {
        this.olmap.removeLayer(this.vector);
      }
      this.vector = newLayer;
    });
  }
  
  componentDidMount() {
    this.olmap.setTarget("map");
  }

  draw:Draw = new Draw({
    source:new VectorSource({
            features: this.props.listPoint.map((value)=>(new Feature(new Point(fromLonLat([+value.x,+value.y]))))),
          }),
      type: GeometryType.POINT
  });
  snap = new Snap();
  setOLMAP = () =>{
    this.olmap.set('layers',[this.raster,
        new VectorLayer({
          source: new VectorSource({
            features: this.props.listPoint.map((value)=>(new Feature(new Point(fromLonLat([+value.x,+value.y]))))),
          }),
          style: new Style({
            image: new Icon({
              anchor: [0.5, 46],
              anchorXUnits: IconAnchorUnits.FRACTION,
              anchorYUnits: IconAnchorUnits.PIXELS,
              opacity: 0.95,
              src: 'https://img.icons8.com/color/search'
            }),
          })
        })
      ],false
    )
  }
  render() {
    return (
      <React.Fragment>
        {this.setOLMAP()}
        <div id="map" style={{position:"relative", width: "100%", height: "90%", borderRadius: "5rem",}}></div>
      </React.Fragment>
    );
  }
}

export default MyComponents;