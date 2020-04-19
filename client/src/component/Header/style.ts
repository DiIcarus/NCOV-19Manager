import styled from "styled-components";

export const Container = styled.div`
  position:fixed;
  height: 50px;
  width: 100%;
  /* padding: 0px 20px; */
  display: flex;
  flex-direction: raw;
  justify-content: space-evenly;
  background-color: tomato;
  align-items:stretch;
  font-size: 15px;
  font-weight: 500;
  line-height: 24px;

`;

export const HotLine = styled.div`
  height: 100%;
  padding: 0px;
  /* background-color: blue; */
  text-align: center;
  align-content:center;
  >p{
    position:relative;
    top:50%;
    transform:translateY(-50%);
    margin:0px;
    /* background-color: black;
    color:white; */
    align-items:stretch;
  }
`;

export const MiddleMenu = styled.div`
  height: 100%;
  /* background-color: yellow; */
`;

export const UsersArea = styled.div`
  height: 100%;
  /* background-color: red; */
`;
