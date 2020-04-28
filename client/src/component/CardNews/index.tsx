import React, { Component } from "react";
//style importer
import * as s__ from "./style";

const src_img = "https://image.thanhnien.vn/1080/uploaded/dangsinh/2020_04_21/thumbnailbantincorona214_mzjn.jpg";

class CardNews extends Component<{},{}> {

  renderInfor = () =>{
    return (
      <s__.TextWrap>
        Tittle of news aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
      </s__.TextWrap>
    )
  }
  render() {
    return(
      <s__.Container>
        <s__.Img src={src_img}/>
        {this.renderInfor()}
      </s__.Container>
    )  
              
  }
}

export default CardNews;
