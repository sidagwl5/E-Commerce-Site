import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import Rating from './Rating';

const Product = ({ data }) => {
  return (
    <>
          <Card>
              <Card.Link href = '#'>
                  <Card.Img src={data.image} />
               </Card.Link>   
              <Card.Body>

                  <Card.Title>
                      {data.name}
                  </Card.Title>    
                  <Card.Text as='div' style = {{height: '200px'}}>
                      {data.description}
                  </Card.Text>    
                 
                  <Card.Subtitle className='d-flex align-items-end'>
                      <Rating rating = {data.rating} reviews = {data.numReviews} />
                  </Card.Subtitle>    
                      
              </Card.Body>    
      </Card>
    </>
  );
};

Product.propTypes = {};

export default Product;
