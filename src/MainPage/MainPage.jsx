import React from 'react';
import './MainPage.css';
import {Switch,Route} from 'react-router-dom';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import IMP from '../IMP/IMP';
import WeightControl from '../WeightControl/WeightControl';
import History from '../History/History';
import Statistic from '../Statistic/Statistic';

const MainPage = ({weight,data, date, getTime, history, wantWeight, diff, inputChange, imt,add, addToHistory, save, getDate}) => {
  return (
    <div>
       <Menu/>
       <Switch> 
       <Route exact path='/' render={props => <IMP weight={weight} date={date} imt={imt} wantWeight={wantWeight} diff={diff} />} />
          <Route path='/IMP' render={props => <IMP weight={weight} date={date} imt={imt} wantWeight={wantWeight} diff={diff} />} />
          <Route path='/weight_control' render={props => <WeightControl  inputChange={inputChange} add={add} save={save} addToHistory={addToHistory} getDate={getDate} getTime={getTime}/>} />
          <Route path='/history' render={props=> <History history={history}/>}/>
          <Route path='/statistic' render={props=> <Statistic data={data}/>}/>

        </Switch>
    </div>
  );
};

export default MainPage;