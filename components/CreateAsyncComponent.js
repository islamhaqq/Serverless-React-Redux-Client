/**
 * "Code Splitting" the application with the use of dynamically imported async
 * components with React Router. This will allow the app to load ONLY the
 * component the user is navigating to, instead of loading EVERYTHING.
 */

import React, { Component } from 'react'

/**
 * Generate an  component.
asynchronous * @method createAsyncComponent
 * @param  {Component} importedComponent - The imported component to generate
 * as an asynchronous component.
 * @return {Void}
 */
export default function createAsyncComponent (importedComponent) {
  /**
   * An asynchronous component used for create routes.
   * @type {Component}
   */
  class AsyncComponent extends Component {
    constructor(props) {
      super(props)

      // create a state property to hold the imported component
      this.state = {
        component: null
      }
    }

    /**
     * Stores imported component in state when this component gets mounted.
     * @method componentDidMount
     * @return {void}
     */
    async componentDidMount() {
      const { default: component } = await importedComponent()

      this.setState({
        /**
         * The component being imported stored in state.
         * @type {Component}
         */
        component: component
      })
    }

    /**
     * Renders the imported component if its valid.
     * @method render
     * @return {Component} - The rendered imported asynchronous component.
     */
    render() {
      const GeneratedAsyncComponent = this.state.component

      // if a valid component is imported and passed in, render it
      return GeneratedAsyncComponent ? <GeneratedAsyncComponent {...this.props} /> : null
    }
  }

  // return the instance of the AsyncComponent class
  return AsyncComponent
}
