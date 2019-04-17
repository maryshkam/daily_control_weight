import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Switch, Route} from 'react-router-dom';
import Header from '../Header/Header';
import StartPage from '../StartPage/StartPage';
import IMP from '../IMP/IMP';
import WeightControl from '../WeightControl/WeightControl';
import MainPage from '../MainPage/MainPage';

class App extends Component {


  state = {
    height: '',
    weight: '',
    wantWeight: '',
    history: [],
    date: '',
    flag: false,
    diff: '',
    time: '',
    dateControl: '',
    imt: '',
    newWeight: ''
  }

  componentDidMount () {
    this.getStorage()
  }
  
  inputChange = (e) => {
    let value = e.target.value;
    let name = e.target.name;
    this.setState({
      [name]: value,
     
    })
  }

  start = (e) => {
    e.preventDefault();
   
  }

  getDate = () => {
    let date = new Date();
    let day = date.getDate();
    if(day <=9) {
      day = '0'+day;
    }

    let month = date.getMonth()+1;
    if(month <=9) {
      month = '0'+month;
    }
    const year = date.getFullYear();
    // console.log(`${day}/${month}/${year}`);
    return `${year}-${month}-${day}`;
    
  }

  getTime = () => {
    let date = new Date();
    
    let hours = date.getHours();
    if(hours <=9) {
      hours='0'+ hours;
    }
    let minutes = date.getMinutes();
    if(minutes <=9) {
      minutes='0'+ minutes;
    }
    return `${hours}:${minutes}`;
  }

  diff =() => {
    let result = Math.abs (Number(this.state.weight) - Number(this.state.wantWeight));
    this.setState({
      diff: result,
    })
  }

  imt = () => {
    let height= Number(this.state.height)/100;
    let result = Number(this.state.weight) /Math.pow(height,2);
this.setState({
  imt: result.toFixed(1),
})
  }

  save = async () => {
    // e.preventDefault();
   await this.getDate();
   await this.diff();
   await this.imt();
   await this.setState({
      flag: true
    });
    await  this.addToHistory();
    await  this.setStorage();
    
  }

  addToHistory =  () => {
    let obj = {
      height: this.state.height,
      weight: this.state.weight,
      wantWeight: this.state.wantWeight,
      date: this.getDate(),
      flag: this.state.flag,
      diff: this.state.diff,
      time: this.getTime(),
      dateControl: this.state.dateControl,
      imt: this.state.imt,
      newWeight: this.state.weight,
    };
    console.log(obj);
    
    this.setState(prev => ({
      history: [...prev.history, obj],
      date: this.getDate(),
      time: this.getTime(),
    }))

    
      // localStorage.setItem('contact', JSON.stringify(action.status ? state.map(el=> el.id === action.value.id ? action.value : el) : [...state, newContact]))
      
  }

  setStorage = () => {
    localStorage.setItem('weight', JSON.stringify(this.state.history))
  }

  getStorage = () => {
  let storage = JSON.parse (localStorage.getItem('weight'));
  let flag = storage === null ? false : true; 
  let date = storage === null ? '' : storage[storage.length-1].date;
  let wantWeight = storage === null ? '' : storage[storage.length-1].wantWeight;
  let height = storage === null ? '' : storage[storage.length-1].height;
  let weight = storage === null ? '' : storage[storage.length-1].weight;
  let diff = storage === null ? '' : storage[storage.length-1].diff;
  let imt = storage === null ? '' : storage[storage.length-1].imt;
  storage = storage === null ? [] : storage;
  this.setState({
    history: storage,
    flag: flag,
    wantWeight: wantWeight,
    weight: weight,
    diff: diff,
    imt: imt,
    height: height,
    date: date,
  })

  }

  getData = () => {
    
  }

  add = async () => {
    // e.preventDefault();
   await this.setState({
      weight: this.state.newWeight,
    });
    this.diff();
    this.imt();
  }

  render() {
    const {weight,date, wantWeight, diff, imt, history} = this.state
    return (
      <div>
        {/* <Switch> */}

        {/* {this.state.flag ? <Route path='/' component={IMP} /> : <StartPage inputChange={this.inputChange} start={this.start} save={this.save}/>} */}


{/* <IMP weight={weight} date={date} wantWeight={wantWeight} diff={diff}/> */}
          {/* <Route  path='/' ></Route> */}
        {/* </Switch> */}
        <Header/>
        {this.state.flag ? <MainPage weight={weight} getTime={this.getTime} date={date} imt={imt} wantWeight={wantWeight} diff={diff} add={this.add} addToHistory={this.addToHistory} inputChange={this.inputChange} setStorage={this.setStorage} save={this.save} history={history} getDate={this.getDate}/> : <StartPage inputChange={this.inputChange} start={this.start} save={this.save} addToHistory={this.addToHistory}setStorage={this.setStorage}/>}
        {/* <Switch> */}
          {/* <Route exact path='/' component={StartPage}/> */}
          {/* <Route path='/IMP' component={IMP}/> */}
          {/* <Route path='/weight_control' component={WeightControl} /> */}
          
        {/* </Switch> */}
      </div>
    );
  }
}

App.propTypes = {

};

export default App;