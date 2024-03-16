import styled from "styled-components";

const Container = styled.div` // el nombre que quiero que represente container va luego del . 


input {
    margin-right: 10px;
    border-radius: 10px;
    font-size: 20px;
}

`
;

const Button = styled.button`
background-color:blueviolet;
color: white;
font-size: 20px;
border-radius: 5px;
cursor: pointer;
&:hover {
    background-color:aliceblue;
}

`
const InputContainer = styled.div`
`
 
export {Container, Button,  InputContainer}