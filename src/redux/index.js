import {createStore, applyMiddleware, combineReducers} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'

import {rootWatcher} from '../redux/saga/index'

import allBooksReducer from './reducers/allBooksReducer'
import filterReducer from './reducers/filterReducer'
import bookReducer from './reducers/bookReducer'

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
    allBooks: allBooksReducer,
    book: bookReducer,
    filter: filterReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(rootWatcher)