import React from 'react';
import {NavLink} from 'react-router-dom';
import './Menu.css';

const Menu = () => {
  return (
    <div className="menu">
      <NavLink className='menu-item' to='/IMP'>IMT</NavLink>
      <NavLink className='menu-item' to='/weight_control'>Контроль ваги</NavLink>
      <NavLink className='menu-item' to='/history'>Історія</NavLink>
      <NavLink className='menu-item' to='/statistic'>Статистика</NavLink>
    </div>
  );
};

export default Menu;