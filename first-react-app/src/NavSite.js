import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class NavSite extends Component {
  render() {
    return (
      <nav>
        <Link to="/" id="home">Home</Link><span> | </span>
        <Link to="/work-history" id="work-history">Work History</Link>
        <span> | </span>
        <Link to="/projects-page" id="projects-page">Projects</Link>
      </nav>
    )
  }
}

export default NavSite
