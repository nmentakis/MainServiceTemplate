import React, {Component} from 'react';
//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Container from './Components/Container';
import './App.css';

class App extends Component{
  constructor(props){
    super(props)
    this.state = {

    }
  }

  render(){
    return (
      <div>
        <div
      className="App">
      <Container/>
      </div>
      </div>
    );
  }
}

export default App;
