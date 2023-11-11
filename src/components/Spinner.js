import React from 'react';
import loader from './loader.gif';

const Spinner = () => {
  return (
    <div>
      <img src={loader} alt="loading.." />
    </div>
  );
};

export default Spinner;
