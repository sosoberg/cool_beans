import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './index.css'

// Apollo/Client
import { ApolloClient, createHttpLink, InMemoryCache, ApolloProvider } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
// components 
import Header from './components/Header'
import Footer from './components/Footer'

// pages 
import Home from './pages/Home'
import Products from './pages/Products'
import Contact from './pages/Contact'
import Join from "./pages/Join"
import Login from "./pages/Login"
import Map from "./pages/Map"

// redux configure
import configureStore from "./redux/configureStore"
import { Provider } from "react-redux";

const store = configureStore();


const httpLink = createHttpLink({
  uri: 'http://localhost:8080/graphql',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});


function App() {
  return (
    <div>
      <ApolloProvider client={client}>
        <Provider store={store}>
      <Router>
            <div className>
                <Header />
            </div>
                <Switch>
                    <Route exact path='/' component={ Home } />
                    <Route exact path='/products' component={ Products } />
                    <Route exact path='/contact' component={ Contact } />
                    <Route exact path='/signup' component={ Join } />
                    <Route exact path='/login' component={ Login } />
                    <Route exact path='/map' component={ Map } />
                </Switch>
                <Footer />
        </Router>
        </Provider>
        </ApolloProvider>
    </div>
  );
}

export default App;
