import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'

const middlewares = []

if (process.env.NODE_ENV === `development`) {
  const { logger } = require(`redux-logger`)

  middlewares.push(logger)
}

const store = createStore(rootReducer, applyMiddleware(thunk, ...middlewares))

export default store
