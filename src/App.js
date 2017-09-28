/**
 * Root component. The first component that gets rendered in the app.
 */

import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import RaisedButton from 'material-ui/RaisedButton'

import logo from './logo.svg'
import './App.css'

const style = {
  margin: 12,
}

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <RaisedButton label="Primary" primary={true} style={style} />
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App
