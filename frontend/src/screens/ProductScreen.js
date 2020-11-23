import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { getSingleProductActionCreator } from '../Store/actions/productActions';
import {
  Container,
  Row,
  Col,
  ListGroup,
  Image,
  ListGroupItem,
  Button,
  Form,
} from 'react-bootstrap';
import Rating from '../components/Rating';

const ProductScreen = ({ match, history }) => {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();
  const productInfo = useSelector((state) => state.product.singleProductInfo);

  useEffect(() => {
    dispatch(getSingleProductActionCreator(match.params.id));
  }, []);

  const handleAddToCart = () => {
    history.push(`/cart/${match.params.id}?qty=${qty}`);
  };

  return (
    productInfo && (
      <Container>
        <Row>
          <Col md={6}>
            <Image src={productInfo.image} className='img-fluid' />
          </Col>
          <Col md={3}>
            <ListGroup>
              <h3>{productInfo.name}</h3>
              <ListGroupItem>
                <Rating
                  rating={productInfo.rating}
                  reviews={productInfo.numReviews}
                  color='yellow'
                />
              </ListGroupItem>
              <ListGroupItem>Price: ${productInfo.price}</ListGroupItem>
              <ListGroupItem>
                Description: {productInfo.description}
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col md={3}>
            <ListGroup>
              <ListGroupItem>Price: ${productInfo.price}</ListGroupItem>
              <ListGroupItem>
                Status:{' '}
                {productInfo.countInStock === 0 ? 'Out of Stock' : 'In Stock'}
              </ListGroupItem>
              {productInfo.countInStock > 0 && (
                <ListGroupItem>
                  <Row>
                    <Col>Quantity</Col>
                    <Col>
                      <Form.Control
                        as='select'
                        value={qty}
                        onChange={(e) => setQty(e.currentTarget.value)}
                      >
                        {new Array(productInfo.countInStock)
                          .fill(0)
                          .map((v, i) => {
                            return (
                              <option key={i + 1} value={i + 1}>
                                {i + 1}
                              </option>
                            );
                          })}
                      </Form.Control>
                    </Col>
                  </Row>
                </ListGroupItem>
              )}
              <Button
                disabled={productInfo.countInStock === 0}
                onClick={handleAddToCart}
              >
                Add To Cart
              </Button>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    )
  );
};

ProductScreen.propTypes = {};

export default ProductScreen;
