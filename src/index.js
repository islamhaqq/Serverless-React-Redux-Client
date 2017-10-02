/**
 * Entry point of the application.
 */

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from "react-router-dom"

import App from './App'
import registerServiceWorker from './registerServiceWorker'
import './assets/styles/index.css'

// render the root component and render the child components based on route
ReactDOM.render(
  // use BrowserRouter as the router to utilize the browser's History API
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
)

// use service workers for offline-first capabilities, to make a Progressive
// Web Application
registerServiceWorker()
