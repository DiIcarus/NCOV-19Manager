// import styled from "styled-components";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ListItem from "@material-ui/core/ListItem";

import Particles from "react-particles-js";
export const Container = styled.div`
  width: 10%;
  height: 100%;
  display: flex;
  align-content: center;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  overflow: auto;
  position: fixed;
  background: linear-gradient(
    155deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(21, 21, 130, 1) 31%,
    rgba(0, 171, 205, 1) 100%
  );
  z-index: 1000;
`;

export const ListMenu = styled.div`
  width: 100%;
  position: absolute;
  top: 0%;
  /* opacity: 0.8; */
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
export const Particless = styled(Particles)`
  position: absolute;
  width: 100%;
  height: 100%;
  /* float:right; */
  z-index: -1000;
  ::after {
    clear: both;
  }
`;
