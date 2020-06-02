import React, { Component } from "react";
import * as s__ from "./style";
import MenuTop from "./../MenuTop/index";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import FormRegister from "./../FormRegister/index";
import FormSignin from "./../FormSignIn/index";

import ChartData from "../ChartData/index";
import HomeComponent from "../HomeComponent/index";
import ManagerComponent from '../ManagerComponent/index';
import Footer from "../Footer/index";
import AboutUs from "../AboutUs/index";
import { MainState } from '../../store/index';
import {connect} from 'react-redux';
import {UserssignedState} from '../../store/UsersSigned/type';
import {SocketIOClient} from '../../modules/socketio-client/socketio-client';
type Props = {
  UserssignedState: UserssignedState
}
class RootContainer extends Component {
  componentDidMount(){
    window.localStorage.setItem('UsersInfo',JSON.stringify(""));
    window.sessionStorage.setItem('UsersInfo',JSON.stringify(""));
    // setInterval(()=>{
      // undefine
      // let str = 
      // let a:object = JSON.parse( String(window.localStorage.getItem('UsersInfo')));
      // console.log(a)
      // console.log(window.sessionStorage.accessToken)
      // console.log(new SocketIOClient().demoOn()); 
      // console.log(new SocketIOClient().demoEmit());
    // },30000);
  }
  renderSwitch = () => {
    return (
      <Switch>
        <Route path="/manager" children={<ManagerComponent />}/>
        <Route path="/register" children={<FormRegister />}/>
        <Route path="/signin" children={<FormSignin />}/>
        <Route path="/about-us" children={<AboutUs />}/>
        <Route path="/" children={<HomeComponent />} />
      </Switch>
    );
  };


  render() {
    return (
      <s__.Container>
        <MenuTop />
        {this.renderSwitch()}
        {/* <Footer/> */}
      </s__.Container>
    );
  }
}

const mapStateToProps = (state:MainState) => ( {
  UserssignedState: state.UserssignedState

})
export default connect(mapStateToProps,{})(RootContainer);






// import React from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   Redirect,
//   useHistory,
//   useLocation
// } from "react-router-dom";

// This example has 3 pages: a public page, a protected
// page, and a login screen. In order to see the protected
// page, you must first login. Pretty standard stuff.
//
// First, visit the public page. Then, visit the protected
// page. You're not yet logged in, so you are redirected
// to the login page. After you login, you are redirected
// back to the protected page.
//
// Notice the URL change each time. If you click the back
// button at this point, would you expect to go back to the
// login page? No! You're already logged in. Try it out,
// and you'll see you go back to the page you visited
// just *before* logging in, the public page.

// export default function AuthExample() {
//   return (
//     <Router>
//       <div>
//         <AuthButton />
//         <ul>
//           <li>
//             <Link to="/public">Public Page</Link>
//           </li>
//           <li>
//             <Link to="/protected">Protected Page</Link>
//           </li>
//         </ul>
//         <Switch>
//           <Route path="/public">
//             <PublicPage />
//           </Route>
//           <Route path="/login">
//             <LoginPage />
//           </Route>
//           <PrivateRoute path="/protected">
//             <ProtectedPage />
//           </PrivateRoute>
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// const fakeAuth = {
//   isAuthenticated: false,
//   authenticate(cb:any) {
//     fakeAuth.isAuthenticated = true;
//     setTimeout(cb, 100); // fake async
//   },
//   signout(cb:any) {
//     fakeAuth.isAuthenticated = false;
//     setTimeout(cb, 100);
//   }
// };

// function AuthButton() {
//   let history = useHistory();
//   return fakeAuth.isAuthenticated ? (
//     <p>
//       Welcome!{" "}
//       <button
//         onClick={() => {
//           fakeAuth.signout(() => history.push("/"));
//         }}
//       >
//         Sign out
//       </button>
//     </p>
//   ) : (
//     <p>You are not logged in.</p>
//   );
// }

// function PrivateRoute({...rest }) {
//   return (
//     <Route
//       {...rest}
//       render={({ location }) =>
//         fakeAuth.isAuthenticated ? (
//           <></>
//         ) : (
//           <Redirect
//             to={{
//               pathname: "/login",
//               state: { from: location }
//             }}
//           />
//         )
//       }
//     />
//   );
// }

// function PublicPage() {
//   return <h3>Public</h3>;
// }

// function ProtectedPage() {
//   const history = useHistory();
//   console.log(useHistory())
//   let click =()=>{
//     history.push('/login')
//   }
//   return <h3 onClick={click}>Protected</h3>;
// }

// function LoginPage() {
//   const history = useHistory();
//   let location1 = useLocation();
//   console.log("Location",useLocation())
//   console.log("Hitory",useHistory());
//   console.log("Historyy",window.history);
//   let { from }:any = location1.state || { from: { pathname: "/" } };
//   // console.log(from);
//   // history.push("/aa");
//   // console.log("History1",history);
//   // history.goBack();
//   let login = () => {
//     history.replace("/");
//   };
//   const location = {
//     pathname: '/one-fish',
//     // search: '?two=fish',
//     // hash: '#red-fish-blue-fish'
//   }
//   const url = history.createHref(location)

//   return (
//     <div>
//       <p>You must log in to view the page at {from.pathname}</p>
//       <button onClick={login}>Log in</button>
//       <a href={url}>sdfghjkl;'</a>
//     </div>
//   );
// }
