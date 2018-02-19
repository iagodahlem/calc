import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { whyDidYouUpdate } from 'why-did-you-update'
import { App } from './components'
import registerServiceWorker from './registerServiceWorker'
import configureStore from './store/configureStore'
import './index.css'

if (process.env.NODE_ENV !== 'production') {
  whyDidYouUpdate(React)
}

const store = configureStore()

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(<Root />, document.getElementById('root'))
registerServiceWorker()
