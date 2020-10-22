import React from 'react';
import PropTypes from 'prop-types';
import Products from '../components/products';
import { Container, Card, Row, Col } from 'react-bootstrap';
import Product from '../components/Product';

const HomeScreen = () => {
  return (
    <Container>
      <Row>
        {Products.map((product) => (
          <Col sm={12} md={6} lg={4} xl={3} className='my-3 p-2'>
            <Product data={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

HomeScreen.propTypes = {};

export default HomeScreen;
