import React from 'react'
import {Link} from 'react-router-dom'

import '../../../styles/components/bookCard.scss'

const BookCard = ({item}) => {
    const smallThumbnail = item.volumeInfo.imageLinks?.smallThumbnail ? item.volumeInfo.imageLinks.smallThumbnail : ''
    const categories = item.volumeInfo.categories ? item.volumeInfo.categories : ['']
    const title = item.volumeInfo.title ? item.volumeInfo.title : ''
    const authors = item.volumeInfo.authors ? item.volumeInfo.authors : ['']
    const id = item.id

    return (
        <Link className='book-card__wrapper' to={`/details/${id}`}>
            <div className='book-card'>
                <div className='book-card__img'>
                    <img src={smallThumbnail}/>
                </div>
                <div className='book-card__categories'>
                    <span>
                        {
                            categories[0]
                        }
                    </span>
                </div>
                <div className='book-card__title'>
                    <h2>{title}</h2>
                </div>
                <div className='book-card__authors'>
                    <ul className='book-card__authors-list'>
                        {
                            authors.map(author => <li className='book-card__authors-item' key={author}>{author}</li>)
                        }
                    </ul>
                </div>
            </div>
        </Link>
    )
}

export default BookCard