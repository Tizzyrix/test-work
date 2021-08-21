import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useParams} from 'react-router-dom'
import {getBook} from '../../redux/actions'
import {helpers} from '../../utils/helpers'
import Loader from '../tech/Loader'
import Error from '../tech/Error'

import '../../styles/components/bookAdvanced.scss'

const BookAdvanced = () => {
    const dispatch = useDispatch()
    const {id} = useParams()  
    const item = useSelector(state => state.book.item)
    const isFetching = useSelector(state => state.book.isFetching)
    const error = useSelector(state => state.book.error)

    const img = item.imageLinks?.medium ? item.imageLinks.medium : ''
    const categories = item.categories ? item.categories : ['']
    const title = item.title ? item.title : ''
    const authors = item.authors ? item.authors : ['']
    const description = item.description ? item.description : ''

    useEffect(()=>{
        dispatch(getBook(id))
    },[])
    const showBookAdvanced = () => {
        if (isFetching) {
            return <Loader />
        } else if (!helpers.isEmpty(error)) {
            return <Error error={error}/>
        } else {
            return (
                <>
                    <div className='book-details__img'>
                        <div className='img_wrapper'>
                            <img src={img} alt='book'/>
                        </div>
                    </div>
                    <div className='book-details__info'>
                        <div className='book-details__categories'>
                            <ul>
                                {
                                    categories.map(category => <li key={category}>{category}</li>)
                                }
                            </ul>
                        </div>
                        <div className='book-details__title'>
                            <h3>{title}</h3>
                        </div>
                        <div className='book-details__authors'>
                            <ul>
                                {
                                    authors.map(author => <li key={author}>{author}</li>)
                                }
                            </ul>
                        </div>
                        <div className='book-details__description'>
                            <p>{description.replace(/<\/?[a-zA-Z]+>/gi,'')}</p>
                        </div>
                    </div>
                </>
            )
        }
    }
          
    return (
        <div className='book-details'>
            {
                showBookAdvanced()
            }
        </div>
    )
}

export default BookAdvanced