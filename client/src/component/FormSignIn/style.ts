import styled from "styled-components";
import { Link } from "react-router-dom";
import {TextField, Button} from '@material-ui/core';

export const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,50%);
`;
export const LinkRoute = styled(Link)`
  color: black;
  text-decoration: none;
  /* border: 1px saddlebrown solid  ;
  padding: 2px; */
`;
export const TextInput = styled(TextField)`
    width:300px;
`

export const TextFieldArea = styled.div`
    margin: 5px 0px;

`
export const ButtonArea = styled.div`
  
`
export const ButtonSignIn = styled(Button)`
    width:300px;
`