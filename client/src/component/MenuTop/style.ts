import styled from "styled-components";




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
