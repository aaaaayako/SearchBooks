import React from 'react'
import { render } from 'react-dom'
import styledNormalize from 'styled-normalize'
import { injectGlobal } from 'styled-components'
import { Provider } from 'react-redux'
import store from './store'
import GetBookListContainer from './containers/GetBookListContainer'

injectGlobal`
  ${styledNormalize}
`

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js')
  })
}

render(
  <Provider store={store}>
    <GetBookListContainer />
  </Provider>,
  document.getElementById('app'),
)
