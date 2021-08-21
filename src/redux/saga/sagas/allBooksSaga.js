import {put, takeEvery, call, select} from 'redux-saga/effects'
import {BOOKS} from '../../types'
import {changeFilterOptions, allBooksFetchStart, allBooksFetchFinished} from '../../actions'
import {FILTER_OPTIONS} from '../../../utils/FILTER_OPTIONS'
import axios from 'axios'

function axiosRequest (url) {
    return axios({
        method: 'GET',
        url: url,
    })
}

function* allBooksSaga ({payload: { isLoadMore } }) {
    const category = yield select(state => state.filter.category)
    const sorting = yield select(state => state.filter.sorting)
    const search = yield select(state => state.filter.search)
    const pageSize = yield select(state => state.filter.pageSize)
    const startIndex = yield select(state => state.filter.startIndex)
    const newStartIndex = startIndex + pageSize
    const apiKey ='AIzaSyBZE54drqATlQ7dfPbyVfVo05AoY0W572o'
    const url = `https://www.googleapis.com/books/v1/volumes?q=${search}+subject:${FILTER_OPTIONS.categories[category]}&startIndex=${isLoadMore ? newStartIndex : 0}&maxResults=${pageSize}&orderBy=${FILTER_OPTIONS.sorting[sorting]}&key=${apiKey}`
    try {
        yield put(allBooksFetchStart())
        const response = yield call(axiosRequest, url)
        console.log(url)
        const {status, statusText, headers, config} = response
        const {totalItems, items} = response.data
        yield put({type: BOOKS.GET_ALLBOOKS_SUCCESS, payload: {
            status, statusText, headers, config, totalItems, items, isLoadMore
        }})
        if (isLoadMore) {
            yield put(changeFilterOptions('startIndex', newStartIndex))
        } else {
            yield put(changeFilterOptions('startIndex', 0))
        }
    } catch (error) {
        yield put({type: BOOKS.GET_ALLBOOKS_FAILED, payload: { error } })
    } finally {
        yield put(allBooksFetchFinished())
    }
}

export function* allBooksWatcher () {
    yield takeEvery(BOOKS.GET_ALLBOOKS, allBooksSaga)
}
