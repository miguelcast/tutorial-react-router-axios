import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Jairo from './Jairo';
import About from './About';
import Error404 from './Error404';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Jairo} />
        <Route path="/about" component={About} />
        <Route component={Error404} />
      </Switch>
    </Router>
  );
}

export default App;
