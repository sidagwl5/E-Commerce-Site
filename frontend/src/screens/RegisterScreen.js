import React, { useState, useEffect } from 'react';
import FormContainer from '../components/FormContainer';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { signupUserActionCreator } from '../Store/actions/signupActions';

const RegisterScreen = ({ history }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const userData = useSelector(({ loginUser }) => loginUser);
  const dispatch = useDispatch();

  const handleSubmit = ({ history }) => {
    if (confirmPassword === password) {
      dispatch(signupUserActionCreator({ email, password, name }));
    } else {
      alert('Passwords not equal');
    }
  };

  useEffect(() => {
    if (userData) {
      history.push('/');
      return;
    }
  }, [userData]);

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <Form.Text style={{ fontSize: '30px', paddingBottom: '10px' }}>
          Signup Form
        </Form.Text>

        <Form.Group>
          <Form.Label htmlFor='name'>Name</Form.Label>
          <Form.Control
            type='email'
            required
            id='name'
            placeholder='Enter your name...'
            onChange={(e) => setName(e.currentTarget.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor='emailAddress'>Email Address</Form.Label>
          <Form.Control
            type='email'
            required
            id='emailAddress'
            placeholder='Enter email address...'
            onChange={(e) => setEmail(e.currentTarget.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor='password'>Password</Form.Label>
          <Form.Control
            type='text'
            required
            id='password'
            placeholder='Enter password...'
            onChange={(e) => setPassword(e.currentTarget.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor='confirmPassword'>Confirm Password</Form.Label>
          <Form.Control
            type='text'
            required
            id='confirmPassword'
            placeholder='Enter confirm password...'
            onChange={(e) => setConfirmPassword(e.currentTarget.value)}
          ></Form.Control>
        </Form.Group>
      </Form>

      <Row>
        <Col>
          <Button
            className='ml-auto'
            variant='primary'
            type='submit'
            disabled={!email || !password || !confirmPassword}
            onClick={handleSubmit}
          >
            Login
          </Button>
        </Col>
      </Row>
    </FormContainer>
  );
};

export default RegisterScreen;
