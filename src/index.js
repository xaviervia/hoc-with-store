import React, { Component } from 'react'

export default ({ getState, subscribe, dispatch }, mapStateToProps = (x => x), mapDispatchToProps = (x => x)) => Target => {
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
      return <Target
        {...{
          ...mapStateToProps(this.state.storeState),
          ...mapDispatchToProps(dispatch),
          ...this.props
        }}
      />
    }
  }

  WithStore.displayName = `withStore(${Target.displayName || Target.name})`

  return WithStore
}
