import React from 'react';
import WorldMap from '../images/WorldMap.png';

const Section = () => (
  <div className='section-main position-relative w-95 min-vh-80 d-flex align-items-center px-5'>
    <div className='section-submain1'>
      <p
        style={{
          color: '#ED7D31',
          fontWeight: '500',
          textTransform: 'uppercase',
        }}
      >
        Connecting the Disconnected
      </p>
      <h1>
        <div>
          <span style={{ color: '#ED7D31' }}>Vyorius </span>
          Brings unmanned
        </div>
        <div>
          robots
          <span style={{ color: '#ED7D31' }}> together</span>,
        </div>
        <div>wherever they are</div>
      </h1>
      <p style={{ fontWeight: '500' }}>
        <div>With all operations, commanding and maintainence</div>
        <div>tools in one place, unmanned vehicles will stay connected</div>
        and productive no matter what you are delivering
      </p>

      <div className='btn-group'>
        <button
          type='button'
          style={{ backgroundColor: '#ED7D31', color: 'white' }}
          className='btn'
        >
          Try Vyorius
        </button>
        <button
          type='button'
          style={{
            backgroundColor: 'white',
            color: '#ED7D31',
            border: '1px #ED7D31 solid',
          }}
          className='btn'
        >
          Learn more
        </button>
      </div>
      <p className='font-weight-medium' style={{ fontWeight: '500' }}>
        Need to order a delivery?
        <a href='https://google.com'> Get Started </a>
      </p>
    </div>

    <div className='section-submain2'>
      <img src={WorldMap} alt='World Map' className='img-fluid' />
    </div>
  </div>
);

export default Section;
