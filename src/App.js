/**
 * Root component. The first component that gets rendered in the app.
 */

import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import Routes from './Routes'

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <Routes />
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App
