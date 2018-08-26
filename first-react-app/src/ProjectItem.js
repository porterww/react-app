import React, { Component } from 'react'
import NavSite from './NavSite'

class ProjectItem extends Component {
    render() {
        return (
        <div className="project-items">
            <h2>{this.props.aboutme}</h2>
            <p>{this.props.dates}</p>
            <p>{this.props.desc}</p>
        </div>
        )
    }
}

export default ProjectItem