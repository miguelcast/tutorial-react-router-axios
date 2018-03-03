import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Jairo from './Jairo';
import About from './About';
import Error404 from './Error404';
import store from './state/store';


function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Jairo} />
          <Route path="/about" component={About} />
          <Route component={Error404} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
