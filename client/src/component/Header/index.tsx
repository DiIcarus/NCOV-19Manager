import React, { Component } from "react";
//style importer
import * as s__ from "./style";
//component importer
import MainMenu from "../MainMenu/index";
import UsersComponent from "../UsersComponent/index";
//utils importer
//config importer
import * as config__ from "./../../config/c__component";

type State = typeof initState;
const initState = {
  string: "Hello my friend" as string,
};
class Header extends Component<{}, State> {
  state = initState;

  render() {
    return (
      <s__.Container>
        <s__.HotLine>
					<p>{config__.HOT_LINE_PHONE}</p>
        </s__.HotLine>
        <s__.MiddleMenu>
          <MainMenu />
        </s__.MiddleMenu>
				<s__.UsersArea>
					<UsersComponent />
				</s__.UsersArea>
      </s__.Container>
    );
  }
}

export default Header;
