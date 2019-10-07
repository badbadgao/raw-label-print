import React from 'react';
import './App.css';
import PrintPanel from './PrintPanel';

import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";


const Home = () => (
  <div>
  </div>
);

const Public = ({match}) => (
  <div>Public{match.params.name}</div>
);

const User = () => (
  <div>User</div>
);

const App = () => {
  return (
    <Router>
      <PrintPanel />
      <Route path="/" exact component={Home} />
      <Route path="/public/:name" component={Public} />
      <Route path="/login" component={User} />
    </Router>
  );
}

export default App;
