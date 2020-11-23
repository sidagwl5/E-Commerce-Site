import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Form,
  Container,
  Button,
  Row,
  Col,
  ListGroup,
  Image,
  ListGroupItem,
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addOrderActionCreator } from '../Store/actions/orderActions';
import BreadCrumbs from '../components/BreadCrumbs';
import { Link } from 'react-router-dom';

const CreateOrderScreen = ({history}) => {

    const dispatch = useDispatch();  
  const { shippingAddress, paymentMethod, productsInCart } = useSelector(
    (state) => state.cart
  );

  const createOrderData = useSelector(state => state.createOrder)

  const itemsPrice = productsInCart.reduce(
    (init, curr) => init + curr.qty * curr.price,
    0
  );
  const shippingPrice = itemsPrice > 100 ? 100 : 0;
  const taxPrice = 0.15 * Number(itemsPrice);
  const totalPrice = itemsPrice + shippingPrice + taxPrice;

  useEffect(() => {

    if (productsInCart.length < 1) {
      history.push("/")
    }
    else if (!paymentMethod) {
      
      history.push('/payment');
    }
    else if (!shippingAddress) {
      history.push('/shipping');
    }
  }, [shippingAddress, paymentMethod, productsInCart])
    
  const addOrderHandler = () => {
     
        dispatch(
          addOrderActionCreator({
            taxPrice,
            shippingPrice,
            totalPrice,
            itemsPrice,
            paymentMethod,
            shippingAddress,
            orderItems: productsInCart,
          })
        );     
  } 
  
  useEffect(() => {

    if (createOrderData) {
    
      history.push(`/order/${createOrderData._id}`);
    }
   
  }, [createOrderData])

  return (
    <Container>
      <Row>
        {productsInCart.length > 0 ? (
          <>
            <Col md={8}>
            <ListGroup variant='flush'>
              <ListGroupItem>
                <h2>Shpping Address</h2>
                <p>
                  {' '}
                  {shippingAddress.street}, {shippingAddress.address},{' '}
                  {shippingAddress.postalCode}{' '}
                </p>
              </ListGroupItem>
            </ListGroup>

            <ListGroup variant='flush'>
              <ListGroupItem>
                <h2>Payment Method</h2>
                <p>{paymentMethod ? paymentMethod : 'Add a payment Method'}</p>
              </ListGroupItem>
            </ListGroup>

              <ListGroup variant='flush'>
                <ListGroupItem>
                  <h2>Cart Items</h2>
                  <p>
                    {productsInCart.length > 0 ? (
                      <ListGroup variant='flush'>
                        {productsInCart.map((item, i) => (
                          <ListGroupItem key={i}>
                            <Row className='d-flex justify-content-space-between'>
                              <Col md={1}>
                                <Image src={item.image} roundedCircle fluid />
                              </Col>
                              <Col md={6}>
                                <Link to={`/product/${item._id}`}>
                                  {item.name}
                                </Link>
                              </Col>
                              <Col md={5}>
                                {item.qty} x {item.price} = $
                                {Number(item.qty) * Number(item.price)}
                              </Col>
                            </Row>
                          </ListGroupItem>
                        ))}
                      </ListGroup>
                    ) : (
                      'Add something to cart'
                    )}
                  </p>
                </ListGroupItem>
              </ListGroup>
              </Col>
            <Col md={4}>
              <Row>
                <ListGroup>
                  <ListGroupItem>
                    <h2>Shipping Details</h2>
                  </ListGroupItem>

                  <ListGroupItem>
                    <p>Items Price: </p>
                    <p>${itemsPrice}</p>
                  </ListGroupItem>

                  <ListGroupItem>
                    <p>Shipping Price: </p>
                    <p>${shippingPrice}</p>
                  </ListGroupItem>

                  <ListGroupItem>
                    <p>Tax Price: </p>
                    <p>${taxPrice}</p>
                  </ListGroupItem>

                  <ListGroupItem>
                    <p>Total Price: </p>
                    <p>${totalPrice}</p>
                  </ListGroupItem>

                  <ListGroupItem>
                    <Row>
                      <Button
                        disabled={productsInCart.length === 0}
                        onClick={addOrderHandler}
                      >
                        Place Order
                      </Button>
                    </Row>
                  </ListGroupItem>
                </ListGroup>
              </Row>
            </Col>
          </>
        ) : (
          <p>No items found</p>
        )}
      </Row>
    </Container>
  );
};

export default CreateOrderScreen;
