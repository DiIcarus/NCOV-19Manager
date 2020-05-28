import React, { Component } from "react";
//style importer
import * as s__ from "./style";
import * as sr__ from "./styler";
//component importer
import ComponentUser from "../ComponentUser/index";
import MenuManager from "../MenuManager/index";
//utils importer
//config importer
import * as config__ from "../../config/globtype";
import {HOST} from "../../modules/config";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ModeCommentIcon from "@material-ui/icons/ModeComment";
import JWT from 'jwt-client';
import { connect } from "react-redux";
import { MainState } from "./../../store/index";
import UserApi from "./../../modules/api/user"
//type
import { UserssignedState } from "./../../store/UsersSigned/type";
import {setTokenUserssigned,setFullnameUserssigned,setAvatarUserssigned} from "./../../store/UsersSigned/action";
import { Route } from "react-router-dom";

type Props = {
  UserssignedState: UserssignedState,
  setFullnameUserssigned: typeof setFullnameUserssigned,
  setAvatarUserssigned: typeof setAvatarUserssigned,
}
type State = typeof initState;
const initState = {
  string: "Hello my friend" as string,
  managerState: false,
  usersName:'',
  img: "https://deephub.vn/wp-content/uploads/2019/03/logoAsset-5@128.png",
};
class MenuTop extends Component<Props, State> {
  state = initState;
  
  img: string =
    "https://deephub.vn/wp-content/uploads/2019/03/logoAsset-5@128.png";
  name: string = "ADMIN";
  userInfo =JSON.parse( String(window.sessionStorage.getItem('UsersInfo')));
  user = window.sessionStorage.accessToken ? (this.userInfo? this.userInfo:this.props.UserssignedState) : this.props.UserssignedState;
  userApi = new UserApi();
  componentDidMount(){
    // setInterval(()=>{
    // console.log("user",JWT.read(sessionStorage.accessToken).claim)
    // if(sessionStorage.accessToken===''){
    this.userApi.getProfile(sessionStorage.accessToken,(res:any)=>{
        this.props.setFullnameUserssigned(res.data.user.fullName);
        this.props.setAvatarUserssigned(res.data.user.avatars);
        this.setState({
          img:res.data.user.avatars[0]?HOST+"/"+res.data.user.avatars[0]:this.img
        })
        console.log("TOPMENU",res);
      },(err:any)=>{
        console.log(err);
      })
    // }

  }
  signout=()=>{
    console.log("aaaaa");
    window.sessionStorage.accessToken = "";
    // this.props.UserssignedState.fullName = "";
    this.setState({
      managerState:false,
    })
    // this.props.
  }
  showManagerList = () =>{
    this.setState({
      managerState:!this.state.managerState
    })
  }
  renderRoute=()=>{
    return (<></>
      // <Route render={window.sessionStorage.accessToken?():(<Redirect to="/"/>)}/>
    )
  }
  render() {
      return (
      <sr__.NavTopMenu>
        <sr__.Container>
          <sr__.LogoArea>
            <sr__.LinkBrand>
              <sr__.Logo src="https://deephub.vn/wp-content/uploads/2019/03/logoAsset-5@128.png"/>
            </sr__.LinkBrand>
            <span></span>
          </sr__.LogoArea>
          <sr__.MenuArea>
            <sr__.MenuChild><sr__.LinkTop to="/">HOME</sr__.LinkTop></sr__.MenuChild>
            {window.sessionStorage.accessToken?<sr__.MenuChild onClick={this.showManagerList} >
              <sr__.LinkTop to="#" >Manager</sr__.LinkTop>
              {this.state.managerState?<MenuManager />:<></>}
            </sr__.MenuChild>:<></>}
            <sr__.MenuChild><sr__.LinkTop to="/about-us">About us</sr__.LinkTop></sr__.MenuChild>
          </sr__.MenuArea>
          <sr__.LogoArea>
            <sr__.LinkBrand>
              {window.sessionStorage.accessToken?
              <sr__.Logo src={this.state.img}></sr__.Logo>:
              <sr__.Logo src={this.state.img}></sr__.Logo>}
              {/* <sr__.Logo src="https://deephub.vn/wp-content/uploads/2019/03/logoAsset-5@128.png"/> */}
            </sr__.LinkBrand>
            <sr__.MenuChild ><sr__.LinkTop to={window.sessionStorage.accessToken?"/":"/signin"}>{window.sessionStorage.accessToken
                ? this.props.UserssignedState.fullName
                : "Sign In"}</sr__.LinkTop></sr__.MenuChild>
          <sr__.MenuChild style={{display:window.sessionStorage.accessToken?"":"none"}} onClick={this.signout}><sr__.LinkTop to="/" onClick={this.signout}>Sign out</sr__.LinkTop></sr__.MenuChild>
            <s__.MenuLink ></s__.MenuLink>
          </sr__.LogoArea>
        </sr__.Container>
      </sr__.NavTopMenu>
    );
  }
}
const mapStateToProps = (state: MainState) => ({
  UserssignedState: state.UserssignedState,
});
export default connect(mapStateToProps, {
  setFullnameUserssigned,
  setAvatarUserssigned,
})(MenuTop);
