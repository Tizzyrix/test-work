import {BOOKS} from '../types'

const initialState = {
    items : [],
    metaData: {
        totalItems: '',
        status: '',
        statusText: ''
    },
    isFetching: false,
    error: {}
}

// Проверку в case BOOKS.GET_ALLBOOKS_SUCCESS сделал, потому что может произойти такое, что в респонсе в поле totalItems может быть кол-во айтемов, но самих items нет

export default function booksReducer (state = initialState, action) {
    switch(action.type) {
        case BOOKS.ALLBOOKS_FETCH_START: {
            return {...state, isFetching: true}
        }
        case BOOKS.ALLBOOKS_FETCH_FINISHED: {
            return {...state, isFetching: false}
        }
        case BOOKS.GET_ALLBOOKS_SUCCESS: {
            const { status, statusText, headers, config, totalItems, items, isLoadMore } = action.payload
            return {
                ...state,
                items:
                isLoadMore ?
                state.items.concat(items)
                :
                items === undefined ?
                []
                :
                items,
                metaData: {...state.metaData, totalItems: items === undefined ? 0 : totalItems, status, statusText, headers, config}
            }
        }
        case BOOKS.GET_ALLBOOKS_FAILED: {
            const { error } = action.payload
            return {...state, error}
        }
        default:
            return state
    }
}