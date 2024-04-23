import './app.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider, 
    createHttpLink,
  } from "@apollo/client";
  import { setContext } from "@apollo/client/link/context";

import Navbar from './components/Navbar';
import SearchBooks from './pages/SearchBooks';
import SavedBooks from './pages/SavedBooks';

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;