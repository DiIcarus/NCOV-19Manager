import React,{Component} from 'react';
//style importer
import * as style__ from './style';
//component importer
import MainMenu from '../MainMenu/index';
import UsersComponent from '../UsersComponent/index';
//utils importer

type State = typeof initState;
const initState = {
  string: "Hello my friend" as string
}
class Header extends Component<{},State>{

    state = initState

    render(){
        return (
        <style__.Container>
            <style__.HotLine>
                <h5>Hot line: 0942214074</h5>
            </style__.HotLine>
            <style__.MiddleMenu>
                <MainMenu 
                />
            </style__.MiddleMenu>
            <UsersComponent/>
        </style__.Container>
        )
    }
}

export default Header;

