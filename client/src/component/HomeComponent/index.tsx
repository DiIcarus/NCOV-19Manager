import React, { Component, ChangeEvent } from "react";

//style importer
// import * as s__ from "./style";
import UserAPI from "../../modules/api/user";
import DoctorAPI from "../../modules/api/doctor";
import ChartSection from "../ChartSection/index";
import MapSection from "../MapSection/index";
import NewsSection from "../NewsSection/index";
class FormSignIn extends Component<{},{}> {
  usersModule = new UserAPI();
  module = new DoctorAPI();

  render() {
    return (
      <React.Fragment>
        <NewsSection />
        <ChartSection />
        <MapSection />
      </React.Fragment>
    );
  }
}



export default FormSignIn;
