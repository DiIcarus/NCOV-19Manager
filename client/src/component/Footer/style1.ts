import styled from 'styled-components';

export const Footer = styled.footer`
  background-color: #363636;
  color: rgba(255,255,255,0.85) !important;
  border-top-width: 0;
  position: relative;
  padding: 1.25rem 0;
  display: block;
`

export const Container = styled.div`
  position: relative;
  height: 100%;
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
  >div{
    /* display:grid; */
    /* grid-template-columns: repeat(12,1fr); */
    /* flex:0 0 1px; */
    display:flex;
    justify-content:space-between;
    flex-wrap:wrap;
  }

`
export const BrandArea = styled.div`
  /* grid-column:1/4; */
  display:flex;
  justify-content:flex-start;
  align-items:center;
`
export const MenuArea = styled.div`
  /* grid-column:4/10; */
  display:flex;
  flex-direction:row;
  justify-content:center;
  align-items:center;
  >div{
    -webkit-box-pack: center !important;
    justify-content: center !important;
    display: flex;
    flex-wrap: wrap;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
  }
`
export const LinkMenu = styled.a`
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 0.85em;
  word-spacing: 2px;
  display: block;
  padding: .5rem 1rem;
`
export const IconArea = styled.div`
  /* grid-column:10/13; */
  display:flex;
  justify-content:flex-end;
  align-items:center;
  >div{

  }
`
export const LinkIcon = styled.a`
  width: 28px;
  height: 28px;
  line-height: 28px;
  margin-right: 2px;
  margin-bottom: 2px;
  /* font-size: 0.8125rem; */

  display: inline-block;
  text-align: center;
  color: inherit;
  /* font-size: 1rem; */
  /* border-radius: 3px; */
  /* opacity: 0.8; */
  -webkit-transition: .4s ease-out;
  transition: .4s ease-out;
  >svg{
    width: 0.83rem;
    display: inline-block;
    font-size: inherit;
    height: 0.83rem;
    overflow: visible;
    vertical-align: -.125em;
  }
`