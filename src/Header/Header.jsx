import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';
import {NavLink} from 'react-router-dom';
import {Switch, Route} from 'react-router-dom';
import WeightControl from '../WeightControl/WeightControl';

const Header = props => {
  return (
    <div className='Header'>
      <NavLink className='add_weight'  to='/weight_control' >+</NavLink>
      <Switch>
        <Route path='/weight_control' ></Route>
      </Switch>
    </div>
  );
};

Header.propTypes = {
  
};

export default Header;