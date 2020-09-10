import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Friends from './components/Friends';
import Navbar from './components/Navbar';


function App() {
  

  return (
    <BrowserRouter>
      <div className="App">
          <Navbar/>
          <div className="container pt-2">
              <Switch>
                <Route path={'/'} component={Home} exact />
                <Route path={'/friends'} component={Friends} exact />
                <Route/>
              </Switch>
          </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
