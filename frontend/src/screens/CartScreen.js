import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  addProductToCartActionCreator,
  removeProductFromCartActionCreator,
} from '../Store/actions/cartActions';
import { useSelector, useDispatch } from 'react-redux';
import { MdDelete } from 'react-icons/md';
import { Container, Row, Col, Image, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function CartScreen({ match, location, history }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const { productsInCart } = cart;

  useEffect(() => {
    const qty = location.search.split('=')[1];
    dispatch(addProductToCartActionCreator(match.params.id, qty));
  }, []);

  const handleSelectChange = (productId, event) => {
    dispatch(
      addProductToCartActionCreator(productId, event.currentTarget.value)
    );
  };

  const handleDelete = (productId) => {
    dispatch(removeProductFromCartActionCreator(productId));
  };

  return (
    <>
      <Container>
        {productsInCart.length > 0 ? (
          <Row>
            {productsInCart.map((item) => (
              <Col md={8}>
                <Row className='py-2'>
                  <Col md={2}>
                    <Image src={item.image} fluid roundedCircle />
                  </Col>
                  <Col md={4} className='d-flex align-items-center'>
                    <Link to={`/product/${item._id}`}>{item.name}</Link>
                  </Col>
                  <Col className='d-flex align-items-center' md={2}>
                    ${item.price}
                  </Col>
                  <Col className='d-flex align-items-center' md={2}>
                    {item.countInStock ? (
                      <Form.Control
                        as='select'
                        value={item.qty}
                        onChange={handleSelectChange.bind(this, item._id)}
                      >
                        {new Array(item.countInStock).fill(0).map((v, i) => (
                          <option value={i + 1} key={i + 1}>
                            {i + 1}
                          </option>
                        ))}
                      </Form.Control>
                    ) : (
                      <p>This product went out of stock</p>
                    )}
                  </Col>
                  <Col className='d-flex align-items-center' md={2}>
                    <MdDelete
                      size={25}
                      onClick={handleDelete.bind(this, item._id)}
                    />
                  </Col>
                </Row>
              </Col>
            ))}
            <Col md={4}>
              <h2>
                Total{' '}
                {productsInCart.reduce(
                  (init, curr) => (init = init + Number(curr.qty)),
                  0
                )}{' '}
                Items
              </h2>
              <Row>
                <Col md={6}>Total:</Col>
                <Col md={6}>
                  {productsInCart.reduce(
                    (init, curr) =>
                      (init =
                        init +
                        Number(curr.price).toFixed(2) *
                          Number(curr.qty).toFixed(2)),
                    0
                  )}
                </Col>
              </Row>
              <Row>
                <Link to = "/shipping"><Button>Continue</Button></Link>
              </Row>  
            </Col>
          </Row>
        ) : (
          <p>No items found...</p>
        )}
      </Container>
    </>
  );
}

CartScreen.propTypes = {};
