import React, { useState, useEffect } from 'react';
import FormContainer from '../components/FormContainer';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { loginUserActionCreator } from '../Store/actions/loginActions';
import { Link } from 'react-router-dom';

const LoginScreen = ({ history }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const userData = useSelector(({ loginUser }) => loginUser);
  const dispatch = useDispatch();
    
  const handleSubmit = ({ history }) => {
    dispatch(loginUserActionCreator({ email, password }));
  }
    

  console.log('loginScreen');
    useEffect(() => {     
      
      if (userData) {
       
        history.push("/");
        return;
      }

   }, [userData])

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <Form.Text style={{ fontSize: '30px', paddingBottom: '10px' }}>
          Login Form
        </Form.Text>
        <Form.Group>
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type='email'
            required
            placeholder='Enter email address...'
            onChange={(e) => setEmail(e.currentTarget.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='text'
            required
            placeholder='Enter password...'
            onChange={(e) => setPassword(e.currentTarget.value)}
          ></Form.Control>
        </Form.Group>
      </Form>

      <Row>
        <Col>
          <Button
            className='ml-auto'
            variant='primary'
            type='submit'
            disabled={!email || !password}
            onClick={handleSubmit}
          >
            Login
          </Button>
        </Col>
      </Row>
      <Row>
        <Col>
           <p>Do not have an account? <Link to = "/signup">Sign Up</Link></p>
        </Col>
      </Row>
    </FormContainer>
  );
};

export default LoginScreen;
