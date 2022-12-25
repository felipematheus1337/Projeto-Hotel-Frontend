import styled from "styled-components";



export const Container = styled.div`
display: flex;
flex-direction: column;
margin: 20px auto;
background: rgb(2,0,36);
background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);
align-items: center;
justify-content: center;
max-height: 100vh;


a {
    text-decoration: none;
    color: black;
}

& a:hover {
    background-color: black;
    color: white;
}

`
export const Utils = styled.a`
margin: 15px auto;
text-align: center;
color: black;
padding: 10px;
border-radius: 10px;
background-color: white;
cursor:pointer;
text-decoration: none;

hover {
    background-color: black;
    color: red;
    text-decoration: none;
}

`;