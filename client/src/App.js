import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './index.css'

// components 
import Header from './components/Header'
import Footer from './components/Footer'

// pages 
import Home from './pages/Home'
import Products from './pages/Products'
import Contact from './pages/Contact'

function App() {
  return (
    <div>
      <Router>
            <div className>
                <Header />
            </div>
                <Switch>
                    <Route exact path='/' component={ Home } />
                    <Route exact path='/products' component={ Products } />
                    <Route exact path='/contact' component={ Contact } />
                </Switch>
                <Footer />
        </Router>
    </div>
  );
}

export default App;
