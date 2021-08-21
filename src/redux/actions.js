import {BOOKS, FILTER} from './types'

export function getAllBooks (isLoadMore = false) {
    return ({type: BOOKS.GET_ALLBOOKS, payload: { isLoadMore } })
}
export function allBooksFetchStart () {
    return ({type: BOOKS.ALLBOOKS_FETCH_START})
}
export function allBooksFetchFinished() {
    return ({type: BOOKS.ALLBOOKS_FETCH_FINISHED})
}


export function getBook (id) {
    return ({type: BOOKS.GET_BOOK, payload: { id } })
}
export function bookFetchStart () {
    return ({type: BOOKS.BOOK_FETCH_START})
}
export function bookFetchFinished () {
    return ({type: BOOKS.BOOK_FETCH_FINISHED})
}


export function changeFilterOptions (option, value) {
    return ({type: FILTER.CHANGE_FILTER, payload: { option, value } })
}
