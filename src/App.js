import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './Components/About'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Machine from './pages/Machine'
import Equipment from './pages/Equipment'
import Artificial from './pages/Artificial'

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
          <Route path="/products/golf_machine">
            <Machine />
          </Route>
          <Route path="/products/golf_equipment">
            <Equipment />
          </Route>
          <Route path="/products/artificial_turf">
            <Artificial />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
