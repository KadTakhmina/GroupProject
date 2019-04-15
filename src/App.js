import React, { Component } from 'react';
import './App.css';


import  { Route } from 'react-router';
import { BrowserRouter,Switch } from 'react-router-dom';
import { createBrowserHistory} from 'history';

import {SearchPage,Restaurants,RaitingsPage} from './pages';



class App extends Component {
  render() {
    return (
      <div className="App container">

        <BrowserRouter history={createBrowserHistory()} >
        <Switch>
          <Route path="/" exact component={SearchPage} />
          <Route path="/restaurants" exact component={Restaurants} />
          <Route path="/raitings" exact component={RaitingsPage} />
         
        </Switch>
       </BrowserRouter>

      </div>
    );
  }
}

export default App;
