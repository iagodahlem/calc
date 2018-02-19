import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'

describe('<App>', () => {
  const props = {
    history: [],
    current: {},
    title: '',
    showHistory: false,
    calc: () => {},
    toggleHistory: () => {},
  }

  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<App {...props} />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
