import React from 'react';
import NavBar from '../components/NavBar';
import Section from '../components/Section';

const MainPage = () => (
  <div className='position-relative mainpage-main w-100 min-vh-100 py-5 d-flex flex-column align-items-center'>
    <NavBar />
    <Section />
  </div>
);

export default MainPage;
