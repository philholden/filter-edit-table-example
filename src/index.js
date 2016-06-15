import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import App from './components/app'
import { AppContainer } from 'react-hot-loader'
import rootReducer from './reducers/root-reducer'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import tableSagas from './sagas/table-sagas'
import {
  createStore,
  applyMiddleware,
  compose,
} from 'redux'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(
      sagaMiddleware
    ),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)

sagaMiddleware.run(tableSagas)
store.dispatch({ type: 'INIT_ROWS' })

if (module.hot) {
  module.hot.accept('./components/app', () => {
    let App = require('./components/app').default
    unmountComponentAtNode(document.getElementById('root'))
    rerender(App)
  })
}

function rerender(App) {
  render(
    <AppContainer>
      <Provider store={store}>
        <App />
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  )
}

rerender(App)

module.exports = App
