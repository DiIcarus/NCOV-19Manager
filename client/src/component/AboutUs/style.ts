import styled from "styled-components";
import Particles from "react-particles-js";
import { TextField, Button } from "@material-ui/core";
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
  min-height: 100vh;
  max-height:auto;
  @media (min-width: 1200px){
      max-width: 1140px;
  }
  width: 100%;
  padding-right:2rem 1.5rem ;
  margin-right: auto;
  margin-left: auto;
  display:flex;
  justify-content:space-evenly;
  align-items:center;
  .my_class{
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
    align-items:center;
    h2{
      font-size:4rem;
    }
    ul>li{
      font-size:2rem;
    }
  }
  
`;
export const TextInput = styled(TextField)`
  width: 300px;
  background-color:white;
`;

export const TextFieldArea = styled.div`
  margin: 5px 0px;
`;

export const ButtonRegister = styled(Button)`
  width: 300px;
`;
export const Particless = styled(Particles)`
  position: absolute;
  width: 100%;
  height: 100%;
  /* float:right; */
  z-index: 0;
  ::after {
    clear: both;
  }
  
`;

export const RegisterArea = styled.div`
  /* margin: 90px; */
  display:flex;
  flex-direction:column;
  padding:1rem;
  background-color:white;
  border-radius:0.5rem;
  color:black;  
  text-align:center;
  margin: 5rem 1rem;
`
