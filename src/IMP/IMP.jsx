import React from 'react';
import PropTypes from 'prop-types';

import {NavLink} from 'react-router-dom';
import {Switch,Route} from 'react-router-dom';
import WeightControl from '../WeightControl/WeightControl';
import Current from '../Current/Current';
import './IMP.css';
import FutureWeight from '../FutureWeight/FutureWeight';
import ReactSpeedometer from 'react-d3-speedometer';
import Menu from '../Menu/Menu';


const IMP = ({weight, date, wantWeight, diff, imt}) => {
  return (
    <div>
      {/* <Header/> */}
     
      {/* <div className="menu">
      <NavLink className='menu-item' to='/IMP'>IMP</NavLink>
      <NavLink className='menu-item' to='/weight-control'>Вага</NavLink>
      <NavLink className='menu-item' to='/history'>Історія</NavLink>
      <NavLink className='menu-item' to='/statistic'>Статистика</NavLink>
      </div> */}
      <div className="weight_box">
        <Current weight={weight} date={date}/>
        <FutureWeight wantWeight={wantWeight} diff={diff}/>
      </div>
      <div className='spedometer'>
      <p className='imt'>IMT (Індекс маси тіла)</p>
      <ReactSpeedometer 
      maxValue={40}
      value={imt}
      // needleColor="steelblue"
      needleTransitionDuration={4000}
      needleTransition="easeElastic"
      startColor="#FF471A"
      segments={5}
      endColor="#33CC33"
      />
      </div>
      
    </div>
  );
};

IMP.propTypes = {
  
};

export default IMP;