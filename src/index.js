/**
 * Entry point of the application.
 */

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from "react-router-dom"

import './assets/styles/index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

// render the root component and render the child components based on route,
// according to react router configuration
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
)

// use service workers for offline-first capabilities, to make a Progressive
// Web Application
registerServiceWorker()
