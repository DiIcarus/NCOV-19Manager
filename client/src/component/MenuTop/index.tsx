import React, { Component } from "react";
//style importer
import * as s__ from "./style";
//component importer
import ComponentUser from "../ComponentUser/index";
//utils importer
//config importer
import * as config__ from "../../config/globtype";
import NotificationsIcon from '@material-ui/icons/Notifications';
import ModeCommentIcon from '@material-ui/icons/ModeComment';

type State = typeof initState;
const initState = {
  string: "Hello my friend" as string,
};
class MenuTop extends Component<{}, State> {
  state = initState;

  img:string = 'https://scontent.fvca1-1.fna.fbcdn.net/v/t1.0-9/89257991_222294712294689_3681975338583195648_n.jpg?_nc_cat=108&_nc_sid=1480c5&_nc_ohc=lzYO_8Zr5pwAX87xxPJ&_nc_ht=scontent.fvca1-1.fna&oh=25695f44f2df2b41f630bf5931749096&oe=5EC84D34';
  name:string = "ADMIN";
  render() {
    return (
      <s__.Container>
        <s__.LogoArea>
          <s__.LogoImg src="https://deephub.vn/wp-content/uploads/2019/03/logoAsset-5@128.png" />
        </s__.LogoArea>
        <s__.MenuArea>
          <s__.MenuChild><s__.MenuLink href="/">HOME</s__.MenuLink></s__.MenuChild>
          <s__.MenuChild><s__.MenuLink href="/manager/room">MANAGER</s__.MenuLink></s__.MenuChild>
          <s__.MenuChild><s__.MenuLink href="/contact">CONTACT</s__.MenuLink></s__.MenuChild>
          <s__.MenuChild><s__.MenuLink href="/about-us">ABOUT US</s__.MenuLink></s__.MenuChild>
        </s__.MenuArea>
        <s__.UserArea>
          <s__.MenuChild><s__.FeatureHead><NotificationsIcon style={{margin:"10px"}}/></s__.FeatureHead></s__.MenuChild>
          <s__.MenuChild><s__.FeatureHead><ModeCommentIcon style={{margin:"10px"}}/></s__.FeatureHead></s__.MenuChild>
          <s__.MenuChild><s__.MenuLink href="/info">
            <s__.AvtArea style={{	backgroundImage: "url('"+this.img+"')"}}/></s__.MenuLink></s__.MenuChild>
          <s__.MenuChild><s__.MenuLink href="/info">{this.name}</s__.MenuLink></s__.MenuChild>
        </s__.UserArea>
      </s__.Container>
    );
  }
}

export default MenuTop;
