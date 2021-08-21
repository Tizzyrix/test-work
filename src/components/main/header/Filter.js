import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {changeFilterOptions, getAllBooks} from '../../../redux/actions'
import {FILTER_OPTIONS} from '../../../utils/FILTER_OPTIONS'

import searchIcon from '../../../img/icons/search.png'
import '../../../styles/components/filter.scss'

const Filter = () => {
    const dispatch = useDispatch()
    const category = useSelector(state => state.filter.category)
    const sorting = useSelector(state => state.filter.sorting)
    const search = useSelector(state => state.filter.search)
    return (
        <div className='filter'>
            <div className='search'>
                <form
                className='search__form'
                onSubmit={(e)=>{
                e.preventDefault()
                dispatch(getAllBooks())
                }}>
                    <input
                    className='search__input'
                    type='text'
                    value={search}
                    placeholder='Search...'
                    onChange={e => dispatch(changeFilterOptions('search', e.target.value))}
                    />
                    <button 
                    className='button'
                    type='submit'>
                        <img
                        className='button__img'
                        src={searchIcon}
                        alt='Search'
                        />
                    </button>
                </form>
            </div>
            <div className='options'>
                <div className='categories'>
                    <select
                    className='select'
                    value={category}
                    onChange={e => dispatch(changeFilterOptions('category', e.target.value))}
                    >
                        {
                            Object.keys(FILTER_OPTIONS.categories).map(key => {
                                return <option className='select__option' value={key} key={key}>{key}</option>
                            })
                        }
                    </select>
                </div>
                <div className='sorting'>
                    <select
                    className='select'
                    value={sorting}
                    onChange={e => dispatch(changeFilterOptions('sorting', e.target.value))}
                    >
                        {
                            Object.keys(FILTER_OPTIONS.sorting).map(key => {
                                return <option className='select__option' value={key} key={key}>{key}</option>
                            })
                        }
                    </select>
                </div>
            </div>
        </div>
    )
}

export default Filter