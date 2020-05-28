import styled from 'styled-components';
import Particles from "react-particles-js";
export const Footer = styled.footer`
  /* background-color: rgb(255,167,54); */
  color: rgba(255,255,255,0.85) !important;
  border-top-width: 0;
  position: relative;
  display: block;
   background: linear-gradient(
    155deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(21, 21, 130, 1) 31%,
    rgba(0, 171, 205, 1) 100%
  );
`

export const Container = styled.div`
  position: relative;
  min-height: 100vh;
  max-height: auto;
  @media (min-width: 1200px){
      max-width: 1140px;
  }
  /* @media (min-width: 992px){
      max-width: 960px;
  }
  @media (min-width: 768px){
      max-width: 720px;
  }
  @media (min-width: 576px){
      max-width: 540px;
  } */
  width: 100%;
  padding-right: 1.5rem;
  padding-left: 1.5rem;
  margin-right: auto;
  margin-left: auto;
  display:flex;
  /* flex-direction:column; */
  justify-content:center;
  align-items:center;
  flex-wrap:wrap;
  .page-not-found{
    font-size:5rem;
  }
`
export const Particless = styled(Particles)`
  position: absolute;
  width: 100%;
  height: 100%;
  /* float:right; */
  z-index:  0;
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