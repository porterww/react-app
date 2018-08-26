import React, { Component } from 'react'
import './App.css'
import HomePage from './HomePage'
import WorkHistoryPage from './WorkHistoryPage'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/" component={WorkHistoryPage}/>
        </Switch>
        </div>
      </Router>
    )
  }
}

export default App
