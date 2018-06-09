import React, { Component } from 'react'

export default ({ getState, subscribe, dispatch }) => Target => {
  class WithStore extends Component {
    constructor() {
      super()

      this.state = {
        storeState: getState(),
      }

      subscribe(() =>
        this.setState({
          storeState: getState(),
        })
      )
    }

    render() {
      return <Target {...{ ...this.state.storeState, ...this.props }} dispatch={dispatch} />
    }
  }

  WithStore.displayName = `withStore(${Target.displayName || Target.name})`

  return WithStore
}
