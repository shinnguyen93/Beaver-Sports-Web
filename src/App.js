import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './Components/About'
import Header from './Components/Header'
import Footer from './Components/Footer'

function App() {

  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contacts">
            <h1>This is Contacts Page</h1>
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
