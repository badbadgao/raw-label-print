import React from 'react';
import './App.css';
import PrintPanel from './PrintPanel';

import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

const Main = ({match}) => (
  <PrintPanel printerName={match.params.printer}/>
);

const App = () => {
  return (
    <Router>
      <Route path="/raw-label-print/:printer" component={Main} />
    </Router>
  );
}

export default App;
