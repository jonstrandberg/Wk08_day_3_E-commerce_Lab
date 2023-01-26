import React from "react";
import styled from "styled-components";

const Home = () => {

const Title = styled.h1`
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    margin-left: 1em;
    background-color: #B5179B;
    padding: 1em;
    width: 87%;
    color: white;
`
const Paragraph = styled.p`
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    margin-left: 2em;
    font-weight: bold;
    font-size: 1.5em;
`

return (
    <div>
        <Title>Tasty Things Deli</Title>
        <Paragraph>Welcome to Tasty Things. Where everything is tasty!</Paragraph>
    </div>
)

}

export default Home