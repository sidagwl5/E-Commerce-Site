import React from 'react';
import { Spinner } from 'react-bootstrap';
import { useSelector } from 'react-redux';

export default () => {
  const loading = useSelector(({ loading }) => loading.loading);

  return loading ? (
    <div
      style={{
        position: 'absolute',
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        zIndex: 1500
      }}
    >
      <Spinner role='status' animation='grow' />
    </div>
  ) : null;
};
