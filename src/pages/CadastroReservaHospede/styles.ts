import styled from "styled-components";


export const Container = styled.div`
color: white;
display: flex;
justify-content: center;
margin-top: -60px;
align-items: center;
`;

export const Form = styled.form`
display: flex;
flex-direction: column;
margin: 5px auto;
color: white;
justify-content: center;
align-items: center;
text-align: center;

& label {
    margin: 10px;
}

& h2 {
    background-color: black;
    text-align: center;
    color: white;
}

button {
    padding: 5px;
    border-radius: 10px;
    translucent: auto;
    font-weight: 1rem;
    font-size: 18px;
    margin-top: 10px;
}

button:hover {
    background-color: black;
    color: white;
}

h4 {
    text-align: center;
}

`;
export const Hospede = styled.div`
align-items: center;

& button {
    margin-left: 5px;
    text-align: center;
}
`;