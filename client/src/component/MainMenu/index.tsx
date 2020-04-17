import React,{Component} from 'react';
//style importer
import * as style__ from './style';
//component importer
//utils importer
import{ Link
} from "react-router-dom";
type State = typeof initState;
const initState = {
  string: "Hello my friend" as string
}
class MainMenu extends Component<{},State>{

    state = initState

    renderHeaderBtn = () => {
        return <React.Fragment>
                    <style__.HeaderBtn><style__.LinkRoute to="/">Home</style__.LinkRoute></style__.HeaderBtn>
                    <style__.HeaderBtn><style__.LinkRoute to="/about-us">About us</style__.LinkRoute></style__.HeaderBtn>
                    <style__.HeaderBtn><style__.LinkRoute to="/documents">Docs</style__.LinkRoute></style__.HeaderBtn>
                    <style__.HeaderBtn><style__.LinkRoute to="/git">Git</style__.LinkRoute></style__.HeaderBtn>
                </React.Fragment>
    }
    
    
    
    render(){
        return (
            <style__.Container>
                {this.renderHeaderBtn()}
            </style__.Container>
        )
    }
}

export default MainMenu;

