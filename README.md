# hoc-with-store

Higher-order React component for binding a Redux Store

## Install

```
yarn add hoc-with-store
```

## Usage

```js
import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import withStore from 'hoc-with-store'

const App = ({dispatch, counter}) => <div>
  {counter}
  <button  
    onClick={() => dispatch({
      type: 'ADD'
    })}>
    Add 1
  </button>
</div>

const store = createStore((state = { counter: 0 }, action) => {
  switch (action.type) {
    case 'ADD':
      return { counter: state.counter + 1 }
    default:
      return state
  }
})

const ConnectedApp = withStore(store)(App)

render(
  <ConnectedApp />,
  document.getElementById('root')
)
```
