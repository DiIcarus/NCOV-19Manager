import styled from 'styled-components';

export const Footer = styled.footer`
  background-color: rgb(54,54,54);
  color: rgba(255,255,255,0.85) !important;
  border-top-width: 0;
  position: relative;
  padding: 1.25rem 0;
  display: block;
`

export const Container = styled.div`
  position: relative;
  height: 100vh;
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
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  display:flex;
  justify-content:center;
  align-items:center;
  /* background-attachment:fixed; */

`
export const ImageGB = styled.div`
  width: 100%;
  height: 100%;
  background-image:url("https://developers.google.com/maps/solutions/images/storelocator_clothing.png?hl=zh-cng");
  background-repeat:no-repeat;
  background-size:cover;
  border-radius:.5rem;
`

