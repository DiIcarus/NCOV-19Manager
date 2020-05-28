import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const NavTopMenu = styled.nav`
	width:100%;
  position:absolute;
  top: 10px;
  left: 0;
  right: 0;
  z-index: 1000;
  padding-top: 0;
  padding-bottom: 0;
  min-height: 56px;
  display:flex;
  justify-content:center;
  align-items:center;
  /* background-color:rgba(255,222,33,.6); */
`
export const LogoArea = styled.div`
  display: -webkit-box;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  flex-shrink: 0;
  margin-right: auto !important;
  box-sizing: border-box;
  font-family: "Quicksand", sans-serif;

  >span{
    display: inline-block;
    height: 16px;
    width: 1px;
    background-color: #fff;
    margin: 0 1rem;
    opacity: 0.15;
    display: block !important;
  }
`
export const Container = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  display:flex;
  /* background-color:gray; */
  flex-direction:row;
  @media (min-width:1200px) {
    max-width:1140px;
  }
`
export const MenuArea = styled.section`
  display: -webkit-box;
  display: flex;
  -webkit-box-align: center;
  align-items: stretch;
  width: 100%;
  padding:none;
  box-sizing: border-box;
  flex-wrap:wrap;
  /* flex-grow: */

  font-family: "Quicksand", sans-serif;
/* 
  font-size: .9375rem;
  font-weight: 300;
  line-height: 1.9;
  color: #757575;
  text-align: left; */
`

export const MainMenu = styled.ul`
  /* height:100%; */
  position: relative;
  margin-right: auto !important;
  display: flex;
  align-items:stretch;
  flex-wrap: wrap;
  padding-left: 0px;
  margin-bottom: 0;
  list-style: none;
  margin-top: 0;
  /* margin-block-start: 1em;
  margin-block-end: 1em; */
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  /* padding-inline-start: 40px; */
  font-family: "Quicksand", sans-serif;
  box-sizing: border-box;
`

export const MenuChild = styled.li`
  position: relative;
  display: flex;
  /* flex-direction:column; */
  justify-content:center;
  align-items:stretch;
  text-align: -webkit-match-parent;
  cursor:pointer;
  /* background-color:blue; */
`

export const LinkTop = styled(Link)`
  display: flex;
  justify-content:center;
  align-items:center;
  padding:0px 1.125rem;
  transition: .2s linear;
  text-decoration: none;
  background-color: transparent;
  box-sizing: border-box;
  font-weight:600;
  font-size:0.80rem;
  word-spacing: 2px;
  letter-spacing: 1px;
  text-transform:uppercase;
  color:#fff;
  :-webkit-any-link{
    cursor: pointer;
  }
`

export const BurgerMenuIcon = styled.button`
  margin-right: 1rem;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  display:none;
`

export const LinkBrand = styled.a`
  display: -webkit-inline-box;
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  padding-top: 0;
  padding-bottom: 0;
  margin-right: 1rem;
  font-size: 1.0625rem;
  line-height: inherit;
  white-space: nowrap;
`
export const Logo = styled.img`
  vertical-align: baseline;
  max-height: 50px;
  min-height: 1px;
  max-width: 100%;
  height: auto;
  vertical-align: middle;
  border-style: none;
  box-sizing: border-box;
  border-radius:50%;
`