// import styled from "styled-components";
// import AppBar from '@material-ui/core/AppBar';
// import { Link } from "react-router-dom";

// export const Container = styled.div`
//   position:fixed;
//   height: 50px;
//   width: 90%;
//   /* padding: 0px 20px; */
//   display: flex;
//   flex-direction: raw;
//   justify-content: space-evenly;
//   background-color: navy;
//   color:white;
//   align-items:stretch;
//   font-size: 15px;
//   font-weight: 500;
//   line-height: 24px;
//   /* text-shadow: 2px 0px 4px black; */
// `;

// export const HotLine = styled.div`
//   height: 100%;
//   padding: 0px;
//   /* background-color: blue; */
//   text-align: center;
//   align-content:center;
//   >p{
//     position:relative;
//     top:50%;
//     transform:translateY(-50%);
//     margin:0px;
//     /* background-color: black;
//     color:white; */
//     align-items:stretch;
//   }
// `;

// export const MiddleMenu = styled.div`
//   height: 100%;
//   /* background-color: yellow; */
// `;

// export const UsersArea = styled.div`
//   height: 100%;
//   /* background-color: red; */
// `;
// export const ContainerMenu = styled.div`
//   display: flex;
//   flex-direction: raw;
//   align-items: center;
//   flex-wrap: wrap;
//   position:relative;
//   top:50%;
//   transform:translateY(-50%);
// `;

// export const HotLineMenu = styled.span``;

// export const MiddleMenuMenu = styled.span``;

// export const HeaderBtnMenu = styled.div`
//   margin-left: 10px;
//   margin-right: 10px;
// `;
// export const LinkRoute = styled(Link)`
//   color: white;
//   text-decoration: none;
//   font-size:25px;
// `;

import styled from "styled-components";



export const Container = styled.div`
	top:0px;
	position:fixed;
	width:100%;
	height:auto;
	display:grid;
	grid-template-columns: repeat(12,1fr);
	box-shadow: 2px 2px 10px black;
	background-color:white;
	font-family: "Quicksand", sans-serif;
	font-weight:600;
	color: #555;
	z-index:2000;
`;

export const LogoArea = styled.div`
	grid-column:2/3;
	display:flex;
`;

export const UserArea = styled.div`
	grid-column:9/12;
	display:flex;
	justify-content:flex-end;
`;

export const AvtArea = styled.div`
	width: 50px;
	margin:10px;
	border-radius:50%;
	box-shadow: 0px 0px 5px #777;
	height: 50px;
	padding:0px;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
`
export const LogoImg = styled.img`
	height:50px;
	padding:10px;
`

export const MenuArea = styled.div`
	grid-column:3/7;
	display:flex;
	flex-flow: wrap;
	justify-content:space-around;
`;

export const MenuChild = styled.span`
	display:flex;
	align-items:stretch;
	
	cursor: pointer;
	:hover{
		color: midnightblue;
	}
`;

export const MenuLink = styled.a`
	align-self:center;
	text-decoration: none;
	color: inherit;
`;

export const FeatureHead = styled.p`
	color: inherit;
	align-self:center;
	margin:0px;
`