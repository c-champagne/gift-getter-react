import React from 'react';
import './App.css';
import {Switch,
        Route,
        Link} from 'react-router-dom';

import Home from './components/Home';

function App() {
  return (
    <div className="container-fluid h-100"> 
      <Switch>
          <Route
            exact
            path="/"
            component={Home}/>
      </Switch>
    </div>


   
  );
}

export default App;
