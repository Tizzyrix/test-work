import React from 'react'
import Title from '../header/Title'
import Filter from '../header/Filter'

const Header = () => {
    return (
        <header className='header'>
            <Title />
            <Filter />
        </header>
    )
}

export default Header