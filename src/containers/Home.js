/**
 * The home page.
 */

import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton'

import logo from '../assets/logos/logo.svg'
import '../assets/styles/App.css'

const style = {
  margin: 12,
}

export default class Home extends Component {
  render() {
    return(
      <div>
        <h1>Home</h1>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <RaisedButton label="Primary" primary={true} style={style} />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    )
  }
}
