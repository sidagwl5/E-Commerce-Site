import React from 'react'
import PropTypes from 'prop-types'
import { Nav, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const BreadCrumbs = ({ step1, step2, step3 }) => {
  return (
    <Nav className='mb-4'>
      {step1 ? (
        <Link to='/shipping'>
          <Nav.Item>Address</Nav.Item>
        </Link>
      ) : (
        <Nav.Link className='m-0 p-0' disabled>
          Address
        </Nav.Link>
      )}

      {step2 ? (
        <Link to='/payment'>
          <Nav.Item>Payment</Nav.Item>
        </Link>
      ) : (
        <Nav.Link className='m-0 p-0' disabled>
          <Nav.Item>Payment</Nav.Item>
        </Nav.Link>
      )}

      {step3 ? (
        <Link to='/order'>
          <Nav.Item>Order</Nav.Item>
        </Link>
      ) : (
        <Nav.Link className='m-0 p-0' disabled>
          <Nav.Item>Order</Nav.Item>
        </Nav.Link>
      )}
    </Nav>
  );
}

BreadCrumbs.propTypes = {

}

export default BreadCrumbs
