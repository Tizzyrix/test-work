import {FILTER} from '../types'

const initialState = {
    category: 'All',
    sorting: 'Relevance',
    search: '',
    pageSize: 30,
    startIndex: 0,
}

export default function filterReducer (state = initialState, action) {
    switch(action.type) {
        case FILTER.CHANGE_FILTER_SET: {
            const { option, value } = action.payload
            return {...state, [option]: value}

        }
        default:
            return state
    }
}
