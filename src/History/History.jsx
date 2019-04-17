import React from 'react';
import PropTypes from 'prop-types';
import HistoryItem from '../HistoryItem/HistoryItem';
import './History.css';

const History = ({history}) => {
  return (
    <div>
      <ul className='history_list'>
        {history.map(el=> <HistoryItem el={el}/> )}
      </ul>
    </div>
  );
};

History.propTypes = {
  
};

export default History;