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
import { getOrderDetailsActionCreator } from '../Store/actions/orderActions';
import BreadCrumbs from '../components/BreadCrumbs';
import { Link } from 'react-router-dom';

const OrderScreen = ({ match }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrderDetailsActionCreator(match.params.id));
  }, []);

  const {
    taxPrice,
    shippingPrice,
    totalPrice,
    itemsPrice,
    paymentMethod,
    shippingAddress,
    orderItems,
    isDelivered,
    isPaid,
  } = useSelector((state) => state.orderDetails);

  //   const itemsPrice = productsInCart.reduce(
  //     (init, curr) => init + curr.qty * curr.price,
  //     0
  //   );

  //   const addOrderHandler = () => {
  //     dispatch(
  //       addOrderActionCreator({
  //         taxPrice,
  //         shippingPrice,
  //         totalPrice,
  //         itemsPrice,
  //         paymentMethod,
  //         shippingAddress,
  //         orderItems: productsInCart,
  //       })
  //     );
  //   };

  return (
    <Container>
      <Row>
          {orderItems && orderItems.length > 0 ? (
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
                  <p>{isDelivered ? 'delivered' : 'Not delivered'}</p>
                </ListGroupItem>
              </ListGroup>

              <ListGroup variant='flush'>
                <ListGroupItem>
                  <h2>Payment Method</h2>
                  <p>
                    {paymentMethod ? paymentMethod : 'Add a payment Method'}
                  </p>
                </ListGroupItem>
              </ListGroup>

              <ListGroup variant='flush'>
                <ListGroupItem>
                  <h2>Cart Items</h2>
                  <p>
                    {orderItems.length > 0 ? (
                      <ListGroup variant='flush'>
                        {orderItems.map((item, i) => (
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
                                          <p>{
                                          isPaid ? "Paid" : "Not Paid"
                                              
                                          }</p>
                    </ListGroupItem>
                  </ListGroup>
                </Row>
              </Col>
            </>
          ) : (
            <p>No order found...</p>
          )}
      </Row>
    </Container>
  );
};

export default OrderScreen;
