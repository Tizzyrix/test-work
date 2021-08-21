import {put, takeEvery} from 'redux-saga/effects'
import {FILTER} from '../../types'

function* filterSaga ({payload: {option, value}}) {
    yield put({type: FILTER.CHANGE_FILTER_SET, payload: {option, value} })
}

export function* filterWatcher () {
    yield takeEvery(FILTER.CHANGE_FILTER, filterSaga)
}
