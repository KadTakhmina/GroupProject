import React, { Component } from 'react';
import './App.css';
import  { Route } from 'react-router';
import { BrowserRouter,Switch } from 'react-router-dom';
import { createBrowserHistory} from 'history';
import {SearchPage,Restaurants,RaitingsPage,ReviewPage,LoginPage} from './pages';


class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter history={createBrowserHistory()} >
          <Switch>
            <Route path="/" exact component={SearchPage} />
            <Route path="/viewPage" exact component={Restaurants} />
            <Route path="/restauranRatings" exact component={RaitingsPage} />
            <Route path="/ReviewPage" exact component={ReviewPage} />
            
            
            
            
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
