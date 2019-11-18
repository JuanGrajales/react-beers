import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios" 
import {Switch, Link, Route} from "react-router-dom"
import Beers from "./components/beers/beers"
import Random from "./components/random/random"
import NewBeer from "./components/new-beer/newBeer"

class App extends Component {

componentDidMount() {
  this.getAllBeers();
}

getAllBeers = () => {
  axios.get("https://ih-beers-api2.herokuapp.com/beers").then(allTheBeers => {
    console.log(allTheBeers);
  })
}

getRandomBeer = () => {
  axios.get("https://ih-beers-api2.herokuapp.com/beers/random").then(randomBeer => {
    console.log(randomBeer);
  })
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <Switch>
          <Route path="/beers" component={Beers} />
          <Route path="/random-beer" component={Random} />
          <Route path="/new-beer" component={NewBeer} />
        </Switch>
      </div>
    );
  }
}

export default App;
