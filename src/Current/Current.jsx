import React from 'react';
import './Current.css';

const Current = ({weight, date}) => {
  return (
    <div className='current_box'>
    <p className='title'>Поточна вага</p>
    <p className='result'>{weight} kg</p>
    <p className='date'>Дата: {date}</p>
      
    </div>
  );
};

export default Current;