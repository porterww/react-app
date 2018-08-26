import React, { Component } from 'react'
import NavSite from './NavSite'

class HomePage extends Component {
  render() {
    return (
      <div className="HomePage">
        <header className="App-header">
          <img
            src="https://vignette.wikia.nocookie.net/naruto/images/5/56/Sharingan_Triple.svg/revision/latest/scale-to-width-down/200?cb=20091022225716"
            className="App-logo"
            alt="logo"
          />
          <h1 className="App-title">About Me</h1>
          <NavSite />
        </header>
        <main id="page-bg">
          <section id="short-bio">
            <br/>
            <p className="App-intro">
              I am a big nerd when it comes to tech or games. I am also very
              passionate about what I do and how I do it. I especialy enjoy
              hanging out with my friends, and family(But mostly my girlfriend!)
            </p>
          </section>
          <section id="bullet-list">
            <h2>Reasons I'm attending HelioTraining</h2>
            <ul id="bullet">
            <li>To take my next steps in a successful career path.</li>
            <li>
              To be able to move out and take my first steps in life outside of
              my parents roof.
            </li>
            <li>
              To afford my own house one day and support my family as well as my
              hobbies.
            </li>
            </ul>
          </section>
          <section>
            <h3>My Internests</h3>
            <ol id="number">
              <li>Books/Manga/Comics.</li>
              <li>American Style Cartoons/Anime.</li>
              <li>Playing Video Games with friends and family.</li>
            </ol>
          </section>
          <br />
          <br />
          <br />
        </main>
        <footer>&copy; 2018 Porter Webster</footer>
      </div>
    )
  }
}
export default HomePage
