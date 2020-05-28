import styled from 'styled-components';

import Particles from "react-particles-js";
export const Footer = styled.footer`
  
  /* background-color: #ff6d12; */
  /* padding-top:30rem; */
  color: rgba(255,255,255,0.85) !important;
  border-top-width: 0;
  position: relative;
  /* padding: 4rem 0; */
  display: block;
  width:100%;
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
  padding:5rem 0rem;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  display:flex;
  /* flex-wrap:wrap; */
  justify-content:center;
  align-items:center;

`
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

export const InfoWrap= styled.div`
  width:100%;
  /* height: 300px; */
  display:flex;
  flex-wrap:wrap;
  justify-content:center;
  align-items:center;

`
