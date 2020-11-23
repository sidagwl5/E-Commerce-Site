import React from 'react';
import { Alert, Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';


export default (props) => {

    const error = useSelector(state => state.error);

    console.log(error);
    
    return error ? (
      <Container>
        <Alert variant='danger'>{error}</Alert>
      </Container>
    ) : null;

}