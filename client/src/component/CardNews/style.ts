import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 250px;
  height:200px;
  background-color: #ddd;
  margin:10px;
  border-radius:5px;
`;

export const HeaderBtn = styled.div`
  display:inline;
  margin-left: 10px;
  margin-right: 10px;
`;
export const Img = styled.img`
  border-top-left-radius:5px;
  border-top-right-radius:5px;
  width:100%;
  height:80%;
`

export const TextWrap = styled.p`
  white-space: nowrap;
  width:100%;
  overflow: hidden;
  text-overflow: ellipsis;
`
export const LinkRoute = styled(Link)`
  display:inline;
  color: black;
  text-decoration: none;
  font-size:10px;
`;
