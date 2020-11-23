import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Container, Card, Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsActionCreator } from '../Store/actions/productActions';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);

  useEffect(() => {
    dispatch(getProductsActionCreator());
  }, []);

  return (
    <Container>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3} className='my-3 p-2'>
            <Product data={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

HomeScreen.propTypes = {};

export default HomeScreen;
