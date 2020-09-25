import React from 'react';
import Eagle from '../images/eagle.png';

const NavBar = () => (
  <div className='w-100 border navbar-main'>
    <div className='container-fluid p-4 position-relative d-flex justify-content-between align-items-center h-100'>
      <div className='position-relative d-flex h-100 justify-content-center align-items-center'>
        <img
          src={Eagle}
          alt='Vyorius Logo'
          className='img-fluid h-100 position-relative'
        />
        <h1 style={{ color: '#ED7D31' }}>vyorius</h1>
      </div>
      <ul className='d-flex list justify-content-between my-auto flex-wrap w-50'>
        <li>Why Vyorius?</li>
        <li>Solutions</li>
        <li>Products</li>
        <li>Use Cases</li>
        <li>Team</li>
        <li>Partner</li>
        <li>Contact Us</li>
      </ul>

      <button
        style={{
          backgroundColor: '#ED7D31',
          color: 'white',
          fontWeight: '500',
        }}
        className='btn'
        type='button'
      >
        Launch Vyorius >
      </button>
    </div>
  </div>
);

export default NavBar;
