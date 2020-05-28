// import styled from "styled-components";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ListItem from "@material-ui/core/ListItem";

import Particles from "react-particles-js";
export const Container = styled.div`
  position:absolute;
  /* bottom:0%; */
  height: 100%;
  width: auto;
  display: flex;
  flex-direction:row;
  justify-content: center;
  align-items: center;
  /* background-color: yellow; */
  transform:translateY(50%);
  z-index:-1;
  /* margin:5rem 0; */
`;

export const ListMenu = styled.div`
  /* width: 100%; */
  /* position:absolute; */
  /* margin:0px; */
  transform:translateY(50%);
  background-color:rgba(0,0,0,.8);
  border-bottom-left-radius:0.5rem;
  border-bottom-right-radius:0.5rem;
  border-bottom-color: white;
  border-bottom-width:2px;
  border-bottom-style:solid;
  border-left-color: white;
  border-left-width:2px;
  border-left-style:solid;
`;

export const LinkChild = styled(Link)`
  text-decoration: none;
  color: white;
`;

export const ListItems = styled(ListItem)`
  :hover {
    /* background-color:white; */
    opacity: 1;
  }
`;
// export const Particless = styled(Particles)`
//   position: absolute;
//   width: 100%;
//   height: 100%;
//   z-index: 0;
//   ::after {
//     clear: both;
//   }
// `;
