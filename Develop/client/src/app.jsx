import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import SearchBooks from './pages/SearchBooks';
import SavedBooks from './pages/SavedBooks';

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

function App() {
  return (
    <Router>
    <>
      <Navbar />
      <Switch>
        <Route exact path='/' components= {SavedBooks} />
        <Route render={() => <h1 className='display-2'>Wrong page!</h1>} />
      </Switch>
    </>
    </Router>
  );
}

export default App;