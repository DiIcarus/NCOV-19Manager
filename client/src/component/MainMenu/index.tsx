import React, { Component } from "react";
//style importer
import * as s__ from "./style";
//component importer
//utils importer
// import { Link } from "react-router-dom";
type State = typeof initState;
const initState = {
  string: "Hello my friend" as string,
};
class MainMenu extends Component<{}, State> {
  state = initState;

  renderHeaderBtn = () => {
    return (
      <React.Fragment>
        <s__.HeaderBtn>
          <s__.LinkRoute to="/">Home</s__.LinkRoute>
        </s__.HeaderBtn>
        <s__.HeaderBtn>
          <s__.LinkRoute to="/about-us">About us</s__.LinkRoute>
        </s__.HeaderBtn>
        <s__.HeaderBtn>
          <s__.LinkRoute to="/documents">Docs</s__.LinkRoute>
        </s__.HeaderBtn>
        <s__.HeaderBtn>
          <s__.LinkRoute to="/git">Git</s__.LinkRoute>
        </s__.HeaderBtn>
      </React.Fragment>
    );
  };

  render() {
    return <s__.Container>{this.renderHeaderBtn()}</s__.Container>;
  }
}

export default MainMenu;
