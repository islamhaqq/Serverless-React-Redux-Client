/*
 * A component that takes users to a specified route. Meant to be used in the
 * Navbar.
 */

import React from 'react'
import { Route } from 'react-router-dom'
import { NavItem } from 'react-bootstrap'

/**
 * A react router based component that takes user to the specified route.
 * @method
 * @param  {Object} props - Passed in data to the component.
 * @return {Object} - The UI component displaying the clicable nav item in JSX.
 */
export default props =>
  <Route
    path={props.href}
    // use the children prop to make use of match between path prop value and
    // the users current location
    children={({ match, history}) =>
      <NavItem
        // add in props
        {...props}
        // send user to path defined in props.href
        onClick={
          event => history.push(event.currentTarget.getAttribute('href'))
        }
        // add active class when the path matches the user's current location
        active={match ? true : false}
        >
          {props.children}
      </NavItem>}
    exact>
  </Route>
