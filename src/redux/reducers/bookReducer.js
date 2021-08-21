import {BOOKS} from '../types'

const initialState = {
    item: {},
    metaData: {},
    error: {},
    isFetching: false,
}

export default function bookReducer (state = initialState, action) {
    switch(action.type) {
        case BOOKS.BOOK_FETCH_START: {
            return {...state, isFetching: true}
        }
        case BOOKS.BOOK_FETCH_FINISHED: {
            return {...state, isFetching: false}
        }
        case BOOKS.GET_BOOK_SUCCESS: {
            const { item } = action.payload
            return {...state, item}
        }
        case BOOKS.GET_BOOK_FAILED: {
            const { error } = action.payload
            return {...state, error}
        }
        default:
            return state
    }
}