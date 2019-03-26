import React, { Component } from 'react'
import './App.css'
import HomePage from './HomePage'
import WorkHistoryPage from './WorkHistoryPage'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import ProjectsPage from './ProjectsPage'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/work-history" component={WorkHistoryPage}/>
          <Route path="/" component={ProjectsPage}/>
        </Switch>
        </div>
      </Router>
    )
  }
}

export default App
