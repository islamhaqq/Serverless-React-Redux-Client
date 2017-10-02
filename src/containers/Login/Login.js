/**
 * The login page where the user fills in a form and the AWS Cognito User Pool
 * authenticates the credentials or sends back an error.
 */

import React, { Component } from 'react'
import { Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap'

class Login extends Component {
  constructor(props) {
    super(props)

    /**
     * Containing the essential form input credentials to authenticate the user.
     * @type {Object}
     */
    this.state = {
      /**
       * The user's email/username to authenticate against Cognito User Pool.
       * @type {String}
       */
      email: '',
      /**
       * The user's password authenticate with the email against the Cognito
       * User Pool.
       * @type {String}
       */
      password: ''
    }
  }

  /**
   * Updates the state according to the value of the form input.
   * @method updateInput
   * @param  {Object} event - The field value changed event.
   * @return {void}
   */
  updateInput = event => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  /**
   * Calculates whether the login form is valid for submission & authentication.
   * @method isFormValidated
   * @return {Boolean} - Whether the login for is valid for submission.
   */
  isFormValidated () {
    return this.state.email.length > 0 && this.state.password.length > 0
  }

  /**
   * Prevents the submit event from refreshing the page.
   * @method preventDefault
   * @param  {Object} event - The form submission event triggered by the
   * click of the submit button.
   * @return {Object} The login form in JSX.
   */
  preventDefault = event => {
    event.preventDefault()
  }

  /**
   * Renders the Login form and page.
   * @method render
   * @return {Object} The login form & page in JSX.
   */
  render () {
    return (
      <div>
        <form onSubmit={this.preventDefault}>
          {/* Email form input section. */}
          <FormGroup controlId="email" bsSize="large">
            <ControlLabel>Email</ControlLabel>
            {/* Email input. */}
            <FormControl
              value={this.state.email}
              onChange={this.updateInput}
              type="email"
              autofocus
            />
          </FormGroup>
          {/* Password form input section. */}
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            {/* Password input. */}
            <FormControl
              value={this.state.password}
              onChange={this.updateInput}
              type="password"
            />
          </FormGroup>
          {/* Form submission. Prepare credentials for authentication. */}
          <Button
            type="submit"
            disabled={!this.isFormValidated()}
            block
            bsSize="large"
            >Submit</Button>
        </form>
      </div>
    )
  }
}

export default Login
