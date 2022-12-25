import styled from "styled-components";


export const Container = styled.div`
display: flex;
flex-direction: row;
margin: 8px auto;

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

h3 {
    background-color: black;
    color: white;
}

& h5:hover {
    background-color: black;
    color: white;
}

li {
    text-decoration: none;
    margin: 3px auto;
    padding: 1px;
}
`
