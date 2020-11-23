import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Form, Container, Button, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { saveShippingAddressActionCreator } from '../Store/actions/cartActions';
import BreadCrumbs from '../components/BreadCrumbs';

const ShippingScreen = ({ history }) => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  const [address, setAddress] = useState(
    shippingAddress ? shippingAddress['address'] : ''
  );
  const [street, setStreet] = useState(
    shippingAddress ? shippingAddress.street : ''
  );
  const [postalCode, setPostalCode] = useState(
    shippingAddress ? shippingAddress.postalCode : ''
  );
  const [country, setCountry] = useState(
    shippingAddress ? shippingAddress.country : ''
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      saveShippingAddressActionCreator({ address, street, postalCode, country })
    );

    history.push('/payment');
  };

  return (
    <Container>
        <Row className='justify-content-center'>
              
              <Col md={6}>
           <BreadCrumbs step1={true} />       
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Street</Form.Label>
              <Form.Control
                type='text'
                required
                value={street}
                onChange={(e) => setStreet(e.currentTarget.value)}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Address</Form.Label>
              <Form.Control
                type='text'
                required
                value={address}
                onChange={(e) => setAddress(e.currentTarget.value)}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Postal Code</Form.Label>
              <Form.Control
                type='text'
                value={postalCode}
                required
                onChange={(e) => setPostalCode(e.currentTarget.value)}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Country</Form.Label>
              <Form.Control
                type='text'
                required
                value={country}
                onChange={(e) => setCountry(e.currentTarget.value)}
              />
            </Form.Group>

            <Button
              disabled={!address || !postalCode || !country || !street}
              type='submit'
            >
              Continue
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

ShippingScreen.propTypes = {};

export default ShippingScreen;
