import React from 'react';
import "./style.css";
import { Jumbotron, Container } from 'react-bootstrap';

function Heading(props) {

return (

<Jumbotron fluid>
  <Container>
    <h1>Employee Directory</h1>
  </Container>
</Jumbotron>
)
}

export default Heading;