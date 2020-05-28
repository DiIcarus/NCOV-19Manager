import styled from "styled-components";
import AppBar from '@material-ui/core/AppBar';
import TableRow from '@material-ui/core/TableRow';
import {TextField, Button} from '@material-ui/core';

export const Container = styled.div`
  width: 100%;
  color:black;
  margin: 5rem 0;
  font-size: 1,5rem;
`;
  
export const TableRowInfo = styled(TableRow)`  
  height: 3rem;
  &:hover{
    background-color: royalblue;
  }
`
export const TableRowHead = styled(TableRow)`
  height: 5rem;
  width:100%;
  /* top:0px; */
  /* position: absolute; */
  background-color:royalblue;
`
export const PopupBackground = styled.div`
  background-color:black;
  position: fixed;
  top:0%;
  left:0%;
  width:100%;
  height:100%;
  opacity: .8;
  
`
export const PopupContainer = styled.div`
  width:auto;
  height:auto;
  position: fixed;
  top:50%;
  left:50%;
  transform:translate(-50%,-50%);
  background-color:white;
  border-radius:5px;
  display: grid;
  grid-column: repeat(2,1fr);
  z-index:1000;
`

export const PopupInfo = styled.div`
  grid-column:1/2;
  /* background-color:yellow; */
  width: 400px;
  display:flex;
  flex-direction:column;
  align-items:center;
  margin:1rem;
`

export const PopupInput = styled.div`
  margin:1rem;
  grid-column:2/3;
  display:flex;
  flex-direction:column;
  align-items:center;
`

export const TextInput = styled(TextField)`
  width:30rem;
`

export const TextFieldArea = styled.span`
  margin: 5px 0px;
`

export const ButtonSubmit = styled(Button)`
  width:30rem;
  display:flex;

`

export const FeatureArea = styled.div`
  height: 50px;
  display: flex;
  justify-content:flex-end;
`

export const SearchInput = styled.input`
  width:300px;
  height: 100%;
  /* border-top-left-radius:5px; */
  /* border-bottom-left-radius:5px; */
  border:none;
  padding: 0px 2rem;
  margin:0px;
  font-size:inherit;
`

export const FeatureButton = styled.button`
  height: 100%;
  width:10%;
  /* background-color:gray; */
  border: none;
  text-align:center;
  &:hover{
    background-color: rgba(0,0,0,0.2);
    color:white;
  }
`

export const PaperDiv = styled.div`
  background-color: royalblue;
  /* width:50px; */
  height: 3rem ;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  display:flex;
  justify-content:center;
  align-items:center;
`

export const PaperDivNumber = styled.button`
  /* height: 100%;
  width:5%; */
  height:30px;
  width:30px;
  background-color:rgba(0,0,0,0.2);
  color:white;
  border: none;
  text-align:center;
  border-radius:50%;
  margin: 0 .5rem;
  p{
    margin:0;
  }
  &:hover{
    background-color: rgba(255,255,255,0.2);
    color:black;
  }
`