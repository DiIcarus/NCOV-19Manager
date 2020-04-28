import styled from 'styled-components';
import {TextField, Button} from '@material-ui/core';

export const Container = styled.div`
    /* position: absolute; */
    /* top: 50%;
    left: 50%; */
    /* transform: translate(-50%,-50%); */
    display:flex;
    flex-direction:column;
`
export const TextInput = styled(TextField)`
    width:300px;
`

export const TextFieldArea = styled.div`
    margin: 5px 0px;

`

export const ButtonRegister = styled(Button)`
    width:300px;
    /* border-color: #F27ED3;
    color: #F27ED3;
    background-color: #F27ED3;
    &:hover{
        color: white;
        background-color: #F27ED3;
    } */
`

