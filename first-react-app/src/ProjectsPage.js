import React, { Component } from 'react'
import NavSite from './NavSite'
import ProjectItem from './ProjectItem';

class ProjectsPage extends Component {
    render() {
        return (
        <section>
            <NavSite/>
            <ProjectItem aboutme="The React About Me App" 
            dates="August 2018 - September 2018" 
            desc="Making a web app using react to descript self and other things"/>
        </section>
        )
    }
}

export default ProjectsPage