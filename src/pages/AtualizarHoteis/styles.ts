import styled from "styled-components";


export const Container = styled.div`
margin: 0px auto;
color: white;
display: flex;
justify-content: center;
`;

export const Form = styled.form`
display: flex;
flex-direction: column;
margin: 0px auto;
color: white;

& label {
   
    color: white;
    margin: 10px;
    text-align: center;
}

& h2 {
    text-align: center;
    background-color: black;
    color: white;
}

button {
    padding: 5px;
    margin: 15px auto;
    border-radius: 10px;
    translucent: auto;
    font-weight: 1rem;
    font-size: 18px;
}

button:hover {
    background-color: black;
    color: white;
}

h4 {
    text-align: center;
}
`;