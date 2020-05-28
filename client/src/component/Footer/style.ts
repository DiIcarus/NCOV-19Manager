import styled from 'styled-components';
import Particles, { HoverMode } from 'react-particles-js';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export const Container = styled.div`
    display:flex;
    flex:1 0 auto;
    justify-content:space-around;  
    align-content:stretch;
    background-color: rgb(54,54,54);
    padding:20px;
`;
export const IconArea = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
`
export const MenuArea = styled.div`
    /* width:500px; */
	display:flex;
	/* flex:1 0 auto; */
	flex-flow: wrap;
	justify-content:space-between;
`;

export const MenuChild = styled.span`
	display:flex;
	align-items:stretch;
	padding:10px 5px;
	cursor: pointer;
`;

export const MenuLink = styled.a`
	align-self:center;
	text-decoration: none;
	color: inherit;
    font-size:13px;
    font-family: "Quicksand", sans-serif;
    font-weight:500;
    color:white;
`;

export const LeftArea = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    color:white;
    :only-child{
        color:inherit;
    }
`