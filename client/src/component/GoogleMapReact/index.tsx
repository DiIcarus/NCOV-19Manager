import React, { Component } from "react";
import OlMap from "ol/Map";
import OlView from "ol/View";
import OlLayerTile from "ol/layer/Tile";
import OlSourceOSM from "ol/source/OSM";
import {OSM, Vector as VectorSource} from 'ol/source';
import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer';
import Draw from 'ol/interaction/Draw';
import {LineString, Point, Polygon} from 'ol/geom';
import {Fill, Icon, Stroke, Style} from 'ol/style';
import GeometryType from "ol/geom/GeometryType";
import { Feature } from "ol";
import IconAnchorUnits from "ol/style/IconAnchorUnits";
type State = typeof initState;
const initState = {
  center: [0, 0], zoom: 1
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
            features: this.props.listPoint.map((value)=>(new Feature(new Point([value.x,value.y]))))
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
        center: this.state.center,
        zoom: this.state.zoom
      }),
  })

  componentDidMount() {
    this.olmap.setTarget("map");
    this.olmap.on("moveend", () => {
      let center = this.olmap.getView().getCenter();
      let zoom = this.olmap.getView().getZoom();
      this.setState({ center, zoom });
    });
    let draw = new Draw({
      source: new VectorSource({wrapX: true,features:[new Feature(new Point([100,100]))]}),
      type: GeometryType.POINT
    });
    this.olmap.addInteraction(draw);
  }

  render() {
    return (
      <div id="map" style={{ width: "100%", height: "90%", borderRadius: "5rem", margin: "2rem 0rem"}}>
      </div>
    );
  }
}

export default MyComponents;