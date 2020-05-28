import styled from "styled-components";
import { Link } from "react-router-dom";
import { TextField, Button } from "@material-ui/core";
import Particles from "react-particles-js";

export const Footer = styled.footer`
  color: rgba(255,255,255,0.85) !important;
  border-top-width: 0;
  position: relative;
  /* padding: 5rem 0; */
  display: block;
  background: linear-gradient(
    155deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(21, 21, 130, 1) 31%,
    rgba(0, 171, 205, 1) 100%
  );
`
export const Container = styled.div`
  /* background-color: white; */
  min-height: 100vh;
  max-height:auto;
  @media (min-width: 1200px){
      max-width: 1140px;
  }
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  display:flex;
  /* flex-direction:column; */
  justify-content:center;
  align-items:center;
`;
export const LinkRoute = styled(Link)`
  color: inherit;
  text-decoration: none;
  z-index:10;
`;
export const TextInput = styled(TextField)`
  width: 300px;
  background-color:white;
  
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
  z-index: 0;
  ::after {
    clear: both;
  }
`;

export const SignInArea = styled.div`
  /* width:300px; */
  /* background-color:black; */
  display:flex;
  flex-direction:column;
  padding:1rem;
  background-color:white;
  border-radius:0.5rem;
  color:black;  
  text-align:center;
  margin:5rem 1rem;
`
