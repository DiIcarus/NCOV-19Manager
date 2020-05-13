import styled from "styled-components";
import { Link } from "react-router-dom";
import { TextField, Button } from "@material-ui/core";
import Particles from "react-particles-js";

export const Container = styled.div`
  position: absolute;
  top: 0%;
  background-color: white;
  border-radius: 5px;
  width: 350px;
  margin: 10px;
  padding: 10px;
  right: 0%;
  transform: translate(-50%, 50%);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
export const LinkRoute = styled(Link)`
  color: black;
  text-decoration: none;
  /* border: 1px saddlebrown solid  ;
  padding: 2px; */
`;
export const TextInput = styled(TextField)`
  width: 300px;
`;

export const TextFieldArea = styled.div`
  margin: 5px 0px;
`;
export const ButtonArea = styled.div``;
export const ButtonSignIn = styled(Button)`
  width: 300px;
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
  background: linear-gradient(
    155deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(21, 21, 130, 1) 31%,
    rgba(0, 171, 205, 1) 100%
  );
`;
