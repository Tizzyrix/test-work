import {put, takeEvery, call} from 'redux-saga/effects'
import {BOOKS} from '../../types'
import axios from 'axios'
import {bookFetchStart, bookFetchFinished} from '../../actions'

function axiosRequest (url) {
    return axios({
        method: 'GET',
        url: url,
    })
}

function* bookSaga ({ payload: { id } }) {
    const apiKey = 'AIzaSyBZE54drqATlQ7dfPbyVfVo05AoY0W572o'
    const url = `https://www.googleapis.com/books/v1/volumes/${id}?key=${apiKey}`
    try {
        yield put(bookFetchStart())
        const response = yield call(axiosRequest, url)
        const item = response.data.volumeInfo
        yield put({type: BOOKS.GET_BOOK_SUCCESS, payload: { item } })
    } catch (error) {
        yield put({type: BOOKS.GET_BOOK_FAILED, payload: { error} })
    } finally {
        yield put(bookFetchFinished())
    }
}

export function* bookWatcher () {
    yield takeEvery(BOOKS.GET_BOOK, bookSaga)
}