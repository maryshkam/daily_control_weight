import React from 'react';
import PropTypes from 'prop-types';
import './FutureWeight.css';

const FutureWeight = ({wantWeight, diff}) => {
  return (
    <div className='futureWeight_box'>
      <p className='title'>Бажана вага</p>
      <p className='result_future'>{wantWeight} kg</p>
      <p className='less'>залишилось: {diff} kg</p>
    </div>
  );
};

FutureWeight.propTypes = {
  
};

export default FutureWeight;