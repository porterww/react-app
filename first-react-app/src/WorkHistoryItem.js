import React, { Component } from 'react'
import NavSite from './NavSite'

class WorkHistoryItems extends Component {
    render() {
      return (
          <div className="job-history">
            <h2>{this.props.company}</h2>
                <p>{this.props.job}<span>{this.props.date}</span></p>
                <ul id="bullet">
                    <li>{this.props.resp1}</li>
                    <li>{this.props.resp2}</li>
                    <li>{this.props.resp3}</li>
                </ul>
                <h3>{this.props.previousjobs}</h3>
                <ul id="bullet">
                    <li>{this.props.job1}</li>
                    <li>{this.props.job2}</li>
                    <li>{this.props.job3}</li>
                </ul>
          </div>
      )
    }
}

export default WorkHistoryItems