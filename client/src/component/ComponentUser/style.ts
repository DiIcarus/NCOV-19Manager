import styled from 'styled-components';
import { Link } from "react-router-dom";

export const Container = styled.span`
  display: flex;
  flex-direction: raw;
  align-items: center;
  flex-wrap: wrap;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
`;

export const HotLine = styled.div`
`

export const MiddleMenu = styled.div`
`

export const HeaderBtn = styled.span`
  height: 100%;

`
export const LinkRoute = styled(Link)`
  color: black;
  text-decoration: none;
  font-size:25px;
  
`;