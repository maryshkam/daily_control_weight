import React from 'react';
import PropTypes from 'prop-types';
import './Statistic.css';
import {Line} from 'react-chartjs-2';

const Statistic = () => {
  const historyData = JSON.parse(localStorage.getItem('weight'));
  const chartData = {
    labels: historyData.map(el=> el.date),
    datasets: [
      {
        data: historyData.map(el=> el.weight),
        backgroundColor: 'transparent',
        borderColor: 'green',
      }
    ]
  }
  
  return (
    <div className='chart'>
      <Line data={chartData}
      width={80}
      height={400}
      
      options={
        { maintainAspectRatio: false,
            title: {
              display: true,
              text: 'Контроль ваги',
            },
            legend: {
              display: false
            }
      
    }}
      />
      
    </div>
  );
};

Statistic.propTypes = {
  
};

export default Statistic;