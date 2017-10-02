/**
 * Configuration of how the user will navigate throughout the app and what
 * component to render for that navigation.
 */

import React from 'react'
import { Route, Switch } from 'react-router-dom'

// import components to create routes for
import Home from './containers/Home'
import NotFound from './containers/NotFound'

// define routes for every component
export default () =>
  <Switch>
    {/* The default page of the app renders the Home component. */}
    <Route path="/" component={Home} exact />
    {/* Wildcard path. Renders "Not Found" on 404s & unmatched routes. */}
    <Route component={NotFound} />
  </Switch>
