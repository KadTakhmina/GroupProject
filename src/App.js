import React, { Component } from 'react';
import './App.css';

<<<<<<< HEAD
=======

>>>>>>> 5438974c0a4fc09fb33ad63cb3c231b6656d6bf1
import  { Route } from 'react-router';
import { BrowserRouter,Switch } from 'react-router-dom';
import { createBrowserHistory} from 'history';

<<<<<<< HEAD

import {SearchPage,Restaurants} from './pages';
=======
import {SearchPage,Restaurants,RaitingsPage} from './pages';

>>>>>>> 5438974c0a4fc09fb33ad63cb3c231b6656d6bf1


class App extends Component {
  render() {
    return (
      <div className="App container">
<<<<<<< HEAD
        <BrowserRouter history={createBrowserHistory()}>
=======

        <BrowserRouter history={createBrowserHistory()} >
>>>>>>> 5438974c0a4fc09fb33ad63cb3c231b6656d6bf1
        <Switch>
          <Route path="/" exact component={SearchPage} />
          <Route path="/restaurants" exact component={Restaurants} />
          <Route path="/raitings" exact component={RaitingsPage} />
         
        </Switch>
       </BrowserRouter>
<<<<<<< HEAD
        
=======

>>>>>>> 5438974c0a4fc09fb33ad63cb3c231b6656d6bf1
      </div>
    );
  }
}

export default App;
