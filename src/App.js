import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
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
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
