import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {getAllBooks} from '../../../redux/actions'
import {helpers} from '../../../utils/helpers'

import Error from '../../tech/Error'
import Loader from '../../tech/Loader'
import BookCard from '../book-list/BookCard'

import '../../../styles/components/bookList.scss'

const BookList = () => {
    const dispatch = useDispatch()
    const isFetching = useSelector(state => state.allBooks.isFetching)
    const items = useSelector(state => state.allBooks.items)
    const totalItems = useSelector(state => state.allBooks.metaData.totalItems)
    const error = useSelector(state => state.allBooks.error)

    const showBookList = () => {
        if (!helpers.isEmpty(error)) {
            return <Error />
        } else if (totalItems === 0) {
            return <div className='tech_msg'>Nothing found</div>
        } else {
            return items.map(item => <BookCard item={item} key={item.etag}/>)
        }
    }

    return (
        <div className='book-list__wrapper'>
            <div className='book-counter__wrapper'>
                <div className='book-counter'>
                    <span>Found {totalItems} results</span>
                </div>
            </div>
            <div className='book-list__wrapper'>
                <div className='book-list'>
                    {showBookList()}
                </div>
            </div>
            {
                isFetching ? 
                <Loader />
                :
                null
            }
            {
                items.length + 1 < totalItems ?
                <div className='load-more__wrapper'>
                    <div className='load-more' onClick={()=>dispatch(getAllBooks(true))}>
                        <span className='load-more__text'>Load more</span>
                    </div>
                </div>
                :
                null
            }   
        </div>
    )
    
}

export default BookList