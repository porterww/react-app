import React, { Component } from "react"
import NavSite from "./NavSite.js"

class WorkHistoryPage extends Component {
  render() {
    return (
      <div className="WorkHistoryPage">
        <header className="App-header">
          <img
            src="https://vignette.wikia.nocookie.net/naruto/images/5/56/Sharingan_Triple.svg/revision/latest/scale-to-width-down/200?cb=20091022225716"
            className="App-logo"
            alt="logo"
          />
          <h1 className="App-title">Porter's Work History</h1>
          <NavSite />
        </header>
      </div>
    )
  }
}

export default WorkHistoryPage
