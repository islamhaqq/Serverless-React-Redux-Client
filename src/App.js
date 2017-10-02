/**
 * Root component. The first component that gets rendered in the app.
 */

import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Navbar } from 'react-bootstrap'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import './assets/styles/App.css'

class App extends Component {
  constructor(props) {
    super(props)

    // define root component state state
    this.state = {
      /**
       * Whether user has logged in and verified his credentials.
       * @type {Boolean}
       */
      isAuthenticated: false,
      isAuthenticating: true
    }
  }

  /**
   * When the app is first mounted, check to see if the user is authenticated.
   * @method componentDidMount
   * @throws {Error}
   * @return {void}
   */
  async componentDidMount() {
    try {
      // check if user is authenticated.
    } catch (error) {
      alert(error)
      throw(Error)
    }

    // let the app know the user isn't authenticating anymore.
    this.setState({ isAuthenticating: false })
  }

  // render the root component to get the app started.
  render() {
    return (
      // inject Material UI styles
      <MuiThemeProvider>
        <div className="App">
          <Navbar fluid collapseOnSelect>
            <Navbar.Header>
              <Navbar.Brand>
                <Link to="/">Scratch</Link>
              </Navbar.Brand>
            </Navbar.Header>
          </Navbar>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App
