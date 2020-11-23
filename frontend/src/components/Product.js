import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import Rating from './Rating';
import { Link } from 'react-router-dom';

const Product = ({ data }) => {
  return (
    <>
      <Card>
        <Link to={`/product/${data._id}`}>
          <Card.Img src={data.image} />
        </Link>
        <Card.Body>
          <Card.Title>{data.name}</Card.Title>
          <Card.Text as='div' style={{ height: '200px' }}>
            {data.description}
          </Card.Text>

          <Card.Subtitle className='d-flex align-items-end'>
            <Rating rating={data.rating} reviews={data.numReviews} />
          </Card.Subtitle>
        </Card.Body>
      </Card>
    </>
  );
};

Product.propTypes = {};

export default Product;
