/**
 * The home page and default route of the app.
 */

import React, { Component } from 'react'

import "../assets/styles/Home.css"

class Home extends Component {
  render() {
    return(
      <div className="Home">
        <div className="lander">
          <h1>Scratch</h1>
          <p>A simple note taking app</p>
        </div>
      </div>
    )
  }
}

export default Home
