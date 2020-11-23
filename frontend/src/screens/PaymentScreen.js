import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addPaymentMethodActionCreator } from '../Store/actions/cartActions';
import BreadCrumbs from '../components/BreadCrumbs';

const PaymentScreen = ({ history }) => {
    const [paymentMethod, setPaymentMethod] = useState('');
    const dispatch = useDispatch();

  const clickHandler = () => {
      
    dispatch(addPaymentMethodActionCreator(paymentMethod)); 
    history.push("/order");
  }  
    
  return (
    <Container>
      <Row className='justify-content-center'>
        <Col md={6}>
          <BreadCrumbs step1={true} step2={true} />
          <Form.Group>
            <Form.Check
              className='p-0 m-0'
              type='radio'
              label='Paypal'
              name='paymentMethod'
              value='Paypal'
              checked={paymentMethod == 'Paypal'}
              onChange={(e) => setPaymentMethod(e.currentTarget.value)}
            />

            {console.log(paymentMethod)}
            <Form.Check
              className='p-0 m-0'
              type='radio'
              label='Stripe'
              name='paymentMethod'
              value='Stripe'
              checked={paymentMethod == 'Stripe'}
              onChange={(e) => setPaymentMethod(e.currentTarget.value)}
            />
            <Button disabled={!paymentMethod} onClick={clickHandler}>
              Submit
            </Button>
          </Form.Group>
        </Col>
      </Row>
    </Container>
  );
};

PaymentScreen.propTypes = {};

export default PaymentScreen;
