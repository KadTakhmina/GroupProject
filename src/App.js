import React, { Component } from 'react';
import './App.css';

import {Header, StickyHeader, AboutPlace, ButtonsBlock, Map, SimilarPlace} from "./components";

class App extends Component {
  render() {
    return (
      <div className="App container">
        <Header/>
        <StickyHeader/>
        <AboutPlace/>
        <ButtonsBlock/>
        <Map/>
        <SimilarPlace/>

        
      </div>
    );
  }
}

export default App;
