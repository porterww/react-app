import React, { Component } from 'react'
import NavSite from './NavSite'
import WorkHistoryItems from './WorkHistoryItem'

class WorkHistoryPage extends Component {
  render() {
    return (
      <div className="WorkHistoryPage">
        <header className="App-header ">
          <img
            src="https://vignette.wikia.nocookie.net/naruto/images/5/56/Sharingan_Triple.svg/revision/latest/scale-to-width-down/200?cb=20091022225716"
            className="App-logo"
            alt="logo"
          />
          <h1 className="App-title">Porter's Work History</h1>
          <NavSite />
        </header>
        <section id="page-bg" className="workpagetest">
          <WorkHistoryItems company="Cotiviti" job="Level 3 Operations Support Agent " date="from 2016-Present" 
          resp1="Support in record retrieval operations."
          resp2="Verifying needed HIPAA before releasing patient info to a facility." 
          resp3="Calling back facility on a different day to obtain a date and delivery method for records to be returned."
          previousjobs="Previous Jobs"
          job1="Jade Bloom" job2="All Star Bowling & Entertainment" job3="McDonalds"/>
        </section>
        <footer>&copy; 2018 Porter Webster</footer>
      </div>
    )
  }
}

export default WorkHistoryPage
