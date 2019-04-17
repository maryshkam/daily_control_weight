import React from 'react';
import PropTypes from 'prop-types';
import './StartPage.css';
import Header from '../Header/Header';
import {NavLink} from 'react-router-dom';

const StartPage = ({inputChange, start, save, addToHistory, setStorage}) => {
  return (
    <div className='modal' onSubmit={e=> {start(e); save(e)}}>
        {/* <div className='modal' > */}

      {/* <Header/> */}
      <form className='startForm'>
      <div className="input-box">
      <label className='label-style' >
      <p className='label-text'>Ріст</p> 
      <input className='input input_height' type="text" name='height'  onChange={inputChange}/>
      cm</label>
      <label className='label-style'>
      <p className='label-text'>Вага</p> 
      <input className='input input_weight' name='weight' type="text" onChange={inputChange}/>
      кг</label>
      <label className='label-style'>
      <p  className='label-text'>Бажана вага</p>
      <input className='input input_want' type="text" name='wantWeight' onChange={inputChange}/>
       кг</label>
       </div>
       {/* <NavLink onClick={save()} className='btn_save' to='/IMT'>Зберегти</NavLink> */}
      <input className='btn_save' type="submit" value="Зберегти"/>
      {/* <input type="submit" value="Скасувати"/> */}
      </form>
    </div>
  );
};

StartPage.propTypes = {
  
};

export default StartPage;