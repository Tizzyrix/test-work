import React from 'react'
import {Link} from 'react-router-dom'

import '../../styles/components/tech/noMatch.scss'

const NoMatch = () => {
    return (
        <div className='no-match'>
            <div className='no-match__text'>
                <span>Whoops, page not found</span>
            </div>
            <div className='no-match__button'>
                <Link className='no-match__link' to='/'>Back to home</Link>
            </div>
        </div>
    )
}

export default NoMatch