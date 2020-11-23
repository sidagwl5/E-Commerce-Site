import React from 'react';
import PropTypes from 'prop-types';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logOutUserActionCreator } from '../Store/actions/loginActions';
import history from '../utilities/browserHistory';

const Header = () => {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.loginUser);

  const logOutHandler = () => {
    dispatch(logOutUserActionCreator());
  };

  return (
    <>
      <Navbar bg='dark' variant='dark' expand='lg'>
        <Container>
          <Link to='/'>
            <Navbar.Brand>ImpoShop</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>
              <Nav.Link href='#'>Home</Nav.Link>
              {userInfo ? (
                <NavDropdown title={userInfo.name}>
                  <NavDropdown.Item onClick={logOutHandler}>
                    Log Out
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <Link to='/login'>
                  <Nav.Link>Log In</Nav.Link>
                </Link>
              )}
              {userInfo && userInfo.isAdmin && (
                <NavDropdown title='Admin'>
                  <NavDropdown.Item>
                    <Link to='/admin/usersList'>Users</Link>
                  </NavDropdown.Item>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

Header.propTypes = {};

export default Header;
