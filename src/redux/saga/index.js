import {all} from 'redux-saga/effects'
import {allBooksWatcher} from '../saga/sagas/allBooksSaga'
import {bookWatcher} from '../saga/sagas/bookSaga'
import {filterWatcher} from '../saga/sagas/filterSaga'

export function* rootWatcher () {
    yield all([
        allBooksWatcher(),
        filterWatcher(),
        bookWatcher()
    ])
}