import styled from "styled-components";
import Particles from "react-particles-js";
import { TextField, Button } from "@material-ui/core";
export const Container = styled.div`
  position: absolute;
  right: 0%;
  background-color: white;
  border-radius: 5px;
  width: 350px;
  /* height: 100%; */
  margin: 10px;
  padding: 10px;
  /* right: 0%; */
  transform: translate(-50%, 0%);
  /* flex-direction: column; */
  display: block;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
export const TextInput = styled(TextField)`
  width: 300px;
`;

export const TextFieldArea = styled.div`
  margin: 5px 0px;
`;

export const ButtonRegister = styled(Button)`
  width: 300px;
  /* border-color: #F27ED3;
    color: #F27ED3;
    background-color: #F27ED3;
    &:hover{
        color: white;
        background-color: #F27ED3;
    } */
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
