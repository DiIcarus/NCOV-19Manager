import React, { Component } from "react";
//style importer
import * as s__ from "./style";
//component importer
import ComponentUser from "../ComponentUser/index";
//utils importer
//config importer
import * as config__ from "../../config/globtype";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ModeCommentIcon from "@material-ui/icons/ModeComment";

import { connect } from "react-redux";
import { MainState } from "./../../store/index";
//type
import { UserssignedState } from "./../../store/UsersSigned/type";
import { Route } from "react-router-dom";

type Props = {
  UserssignedState: UserssignedState,
}
type State = typeof initState;
const initState = {
  string: "Hello my friend" as string,
};
class MenuTop extends Component<Props, State> {
  state = initState;
  img: string =
    "https://scontent.fvca1-1.fna.fbcdn.net/v/t1.0-9/89257991_222294712294689_3681975338583195648_n.jpg?_nc_cat=108&_nc_sid=1480c5&_nc_ohc=lzYO_8Zr5pwAX87xxPJ&_nc_ht=scontent.fvca1-1.fna&oh=25695f44f2df2b41f630bf5931749096&oe=5EC84D34";
  name: string = "ADMIN";
  userInfo =JSON.parse( String(window.localStorage.getItem('UsersInfo')));
  user = window.sessionStorage.accessToken ? (this.userInfo? this.userInfo:this.props.UserssignedState) : this.props.UserssignedState;
  componentDidMount(){
    setInterval(()=>{
      console.log("user",this.user)
      console.log("userSession", this.userInfo) 
    },1000)
  }
  renderRoute=()=>{
    return (<></>
      // <Route render={window.sessionStorage.accessToken?():(<Redirect to="/"/>)}/>
    )
  }
  render() {
    return (
      <s__.Container>
        <s__.LogoArea>
          <s__.LogoImg src="https://deephub.vn/wp-content/uploads/2019/03/logoAsset-5@128.png" />
        </s__.LogoArea>
        <s__.MenuArea>
          <s__.MenuChild>
            <s__.MenuLink href="/">HOME</s__.MenuLink>
          </s__.MenuChild>
          {(window.sessionStorage.accessToken)===undefined?
          <></>:<s__.MenuChild>
            <s__.MenuLink href="/manager/room">MANAGER</s__.MenuLink>
          </s__.MenuChild>

          }          <s__.MenuChild>
            <s__.MenuLink href="/contact">CONTACT</s__.MenuLink>
          </s__.MenuChild>
          <s__.MenuChild>
            <s__.MenuLink href="/about-us">ABOUT US</s__.MenuLink>
          </s__.MenuChild>
        </s__.MenuArea>
        <s__.UserArea>
          <s__.MenuChild>
            <s__.FeatureHead>
              <NotificationsIcon style={{ margin: "10px" }} />
            </s__.FeatureHead>
          </s__.MenuChild>
          <s__.MenuChild>
            <s__.FeatureHead>
              <ModeCommentIcon style={{ margin: "10px" }} />
            </s__.FeatureHead>
          </s__.MenuChild>
          <s__.MenuChild>
            <s__.MenuLink href={window.sessionStorage.accessToken?"/":"/signin"}>
              <s__.AvtArea
                // style={{
                //   backgroundImage:
                //     "url('" + window.sessionStorage.accessToken
                //       ?( this.user.avatars!==[]?this.user.avatars[0]:this.img)
                //       : this.img + "')",
                // }}
              />
            </s__.MenuLink>
          </s__.MenuChild>
          <s__.MenuChild>
            <s__.MenuLink href={window.sessionStorage.accessToken?"/":"/signin"}>
              {window.sessionStorage.accessToken
                ? this.user.fullName
                : "Sign In"}
            </s__.MenuLink>
          </s__.MenuChild>
        </s__.UserArea>
      </s__.Container>
    );
  }
}
const mapStateToProps = (state: MainState) => ({
  UserssignedState: state.UserssignedState,
});
export default connect(mapStateToProps, {})(MenuTop);
