import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import ItemDetail from './components/ItemDetail';

const App = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/item/:id" component={ItemDetail} />
      </div>
    </Router>
  );
};

export default App;
