import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Jairo from './components/Jairo/Jairo';
import Product from './components/Product/Product';
import CounterProducts from './components/Product/CounterProducts';
import Error404 from './components/Error/Error404';
import store from './state/store';
import 'antd/dist/antd.min.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Jairo} />
          <Route path="/products" component={Product} />
          <Route path="/count" component={CounterProducts} />
          <Route component={Error404} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
