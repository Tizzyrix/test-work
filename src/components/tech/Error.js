import React from 'react'

import '../../styles/components/tech/error.scss'

const Error = ({ error }) => {
    // console.log(error)
    return (
        <div className='error'>
            <div className='error__title'>
                <span>ERROR</span>
            </div>
            <div className='error__text'>
                <span>Something goes wrong</span>
            </div>
        </div>
    )
}

export default Error