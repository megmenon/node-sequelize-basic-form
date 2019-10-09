import styled from "styled-components";
import { createGlobalStyle } from 'styled-components';
import img from './TeamMember/matterapp.png';
import '../colors.css';

export const GlobalStyle = createGlobalStyle`
    body {
        background-color: var(--dark-blue);
        background-image: url(${img});
        background-repeat: space;
        backgroung-position: center;
        background-size: 10%;
    }
`;

export const FormHeading = styled.h1`
    color: black;
    font-size: 40px;
    font-family: Rubik, sans-serif;
`;

export const FormContainer = styled.form`
    height: 700px;
    width: 50%;
    margin: 50px auto;
    background-color: var(--plain-white);
    padding: 30px 50px 0px 50px;
    -webkit-box-shadow: 0 0 10px var(--dark-grey);
`;

export const FormValues = styled.h4`
    font-family: Rubik, sans-serif;
    color: black;
    font-weight: 900;
`;

export const Input = styled.input`
    padding: 1em;
    border: none;
    background: transparent;
    border-bottom: 1px solid var(--green);
    outline: none;
    width: 70%;
    margin: auto;
    align-items: center;
`;

export const SubmitButton = styled.button`
    color: var(--plain-white);
    font-weight: 900;
    font-family: Rubik, sans-serif;
    font-size: 15px;
    background-color: var(--green);
    height: 35px;
    width: 30%;
    border: 1px solid var(--green);
    -webkit-box-shadow: 0 0 5px var(--light-grey);
`;

export const TeamHeading = styled.h3`
    position: relative;
    top: 20%;
    font-size: 20px;
`;

export const AddButtonContainer = styled.div`
    display: grid;
    justify-content: center;
    align-content: center;
    position: relative;
    top: 25%;
`;

export const Add = styled.a`
   border-radius: 50%;
   height: 70px;
   width: 70px;
   font-family: Rubik, sans-serif;
   font-size: 25px;
   cursor: pointer;
   text-decoration: none;
   color: var(--plain-white);
   background-color: var(--pale-pink);
   &:hover {
    background: var(--dark-grey);
  }
`;

export const AddSymbol = styled.h4`
  position: relative;
  bottom: 10px;
`


