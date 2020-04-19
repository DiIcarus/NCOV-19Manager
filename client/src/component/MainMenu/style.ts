import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: raw;
  align-items: center;
  flex-wrap: wrap;

  position:relative;
  top:50%;
  transform:translateY(-50%);
`;

export const HotLine = styled.span``;

export const MiddleMenu = styled.span``;

export const HeaderBtn = styled.div`
  margin-left: 10px;
  margin-right: 10px;
`;
export const LinkRoute = styled(Link)`
  color: black;
  text-decoration: none;
  font-size:25px;
`;
