import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// Import Home
import Home from './pages/Home';
//import events
import EventsList from './components/blog/EventsList';
//import search pages
import SearchPage from './components/blog/SearchPage';
// Import Css Here
import './assets/scss/style.scss';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path={`${process.env.PUBLIC_URL + '/'}`} exact component={Home} />
        <Route path={`${process.env.PUBLIC_URL + '/search'}`} exact component={SearchPage} />
        <Route path={`${process.env.PUBLIC_URL + '/artist/:id'}`} exact component={EventsList} />
        <Route path={`${process.env.PUBLIC_URL + '*'}`} exact component={Error} />
      </Switch>
    </Router>
  );
};

export default App;
