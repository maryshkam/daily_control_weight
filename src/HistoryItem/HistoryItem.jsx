import React from 'react';
import PropTypes from 'prop-types';
import './HistoryItem.css';

const HistoryItem = ({el}) => {
  return (
    <div className='history'>
    <div className="history_ident">
    <p className=''>Дата</p>

      <p className='history_date'>{el.date}</p>
      <p className='history_time'>{el.time}</p>
      </div>
      <div className="weight_history">
      <p className=''>Вага</p>
      <p className='history_weight'>{el.weight}<span className='kg'> kg</span></p>
      </div>
      <div className="history_diff">
      <p className='different'>Залишилось до мети</p>
      <p className='history_weight'>{el.diff}<span className='kg'> kg</span></p>
      </div>
    </div>
  );
};

HistoryItem.propTypes = {
  
};

export default HistoryItem;