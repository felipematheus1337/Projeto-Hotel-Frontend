import styled from "styled-components";


export const Container = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
margin: 15px auto;

`;


export const Result = styled.div`
color: black;
background-color: #c6c5b9;
border-radius: 10px;
padding: 10px;
margin: 2px auto;

h4 {
    border-bottom: 1px solid black;
}

h5 {
    border-bottom: 1px solid black;
}

& h5:hover {
    background-color: black;
    color: white;
}
`
