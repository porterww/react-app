import React, { Component } from "react"
import NavSite from "./NavSite"
import ProjectItem from "./ProjectItem"

class ProjectsPage extends Component {
  render() {
    return (
      <div className="WorkHistoryPage">
        <header className="App-header">
          <img
            src="https://vignette.wikia.nocookie.net/naruto/images/5/56/Sharingan_Triple.svg/revision/latest/scale-to-width-down/200?cb=20091022225716"
            className="App-logo"
            alt="logo"
          />
          <h1 className="App-title">Porter's Projects Page</h1>
          <NavSite />
        </header>
        <section id="page-bg" className="workpagetest">
          <ProjectItem
            aboutme="The React About Me App"
            dates="August 2018 - September 2018"
            desc="Making a web app using react to descript self and other things"
          />
        </section>
      </div>
    )
  }
}

export default ProjectsPage
