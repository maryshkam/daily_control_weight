import React from 'react';
import {NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';
import './WeightControl.css';

const WeightControl = ({inputChange, add, save, addToHistory, getDate, getTime}) => {
  return (
    <div >
    <p className='weight_header'>Додати контрольну вагу</p>

    <form className='weight_control'>
    {/* <form onSubmit={e=> {add(e); save(e) }}></form> */}
    
    <div className="input-box-weight">
      <label className='label' >
      <p >Вага</p>
      <input className='input input_weight' type="text" name='newWeight'  onChange={inputChange}/>
      </label>
      <label className='label'>
      <p >Дата</p>
      <input className='input input_date' name='dateControl' type="date" value={getDate()} onChange={inputChange}/>
      </label>
      <label className='label'>
      <p>Час</p>
      <input className='input input_time' type="time" name='time' value={getTime()} onChange={inputChange}/>
       </label>
       </div>
       {/* <input className='btn_save' type="submit" value="Зберегти"/> */}

<div className='box_button'>

       <NavLink onClick={e=> {add(e); save(e) }} to='/IMP' className='saveWeight'> Зберегти</NavLink>
      <NavLink to='/IMP' className='saveWeight'>Скасувати</NavLink>
      </div>
       {/* <input className='btn_save' type="button" value="Скасувати"/> */}



    </form>
      
    </div>
  );
};

WeightControl.propTypes = {
  
};

export default WeightControl;

