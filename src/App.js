import React, { Component } from 'react';
import './App.css';

import {Header} from "./components";
import {StickyHeader,Carousel} from './components';


class App extends Component {
  render() {
    return (
      <div className="App container">
        <Header/>
        <StickyHeader/>
        <Carousel/>
        <h1>Hi everyone!!!</h1>
        
      </div>
    );
  }
}

export default App;
