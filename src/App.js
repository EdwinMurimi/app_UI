import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/Home.js';
import Feeds from './pages/Feeds.js';
import Navbar from './pages/Navbar.js';
import FeedDetails from './pages/FeedDetails.js';

export default function App() {

  return (
    <div className="App">   
        <Router>
            <Navbar/>
            <Switch> 
              <Route path="/feeds/:id" component={FeedDetails}/>
              <Route path="/feeds" component={Feeds}/>
              <Route exact path="" component={Home}/>
            </Switch>
        </Router>
    </div>
  );
}


