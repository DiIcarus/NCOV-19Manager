import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,50%);
`;
export const LinkRoute = styled(Link)`
  color: black;
  text-decoration: none;
  border: 1px saddlebrown solid  ;
  padding: 2px;
`;
