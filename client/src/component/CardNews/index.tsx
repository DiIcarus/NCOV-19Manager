import React, { Component } from "react";
//style importer
import * as s__ from "./style";
import { Card, CardActionArea,CardMedia,CardContent,Typography, } from '@material-ui/core';

const src_img = "https://image.thanhnien.vn/1080/uploaded/dangsinh/2020_04_21/thumbnailbantincorona214_mzjn.jpg";

class CardNews extends Component<{},{}> {

  // renderInfor = () =>{
  //   return (
  //     <s__.TextWrap>
  //     </s__.TextWrap>
  //   )
  // }
  // render() {
  //   return(
  //     <s__.Container>
  //       <s__.Img src={src_img}/>
  //       {this.renderInfor()}
  //     </s__.Container>
  //   )  
              
  // }
  style = {
    // height:"20rem",
    maxWidth:"15rem"
  }
  render(){
    return (
      <Card
      style={{margin:".5rem"}}
      >
        <CardActionArea
        style={this.style}
        >
          <CardMedia
            component="img"
            image={src_img}
            style={this.style}
            />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              style={this.style}
              >
              Lizard
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              style={this.style}
            >
              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    )
  }
}

export default CardNews;
