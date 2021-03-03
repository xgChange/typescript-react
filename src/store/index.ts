import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducer'

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const middleware = [thunk]

const storeEnhancer = applyMiddleware(...middleware)

export default createStore(reducer, composeEnhancers(storeEnhancer))
