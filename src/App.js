import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {getAllBooks} from './redux/actions'

import MainPage from './components/main/mainPage'
import BookAdvanced from './components/book-advanced/BookAdvanced'
import NoMatch from './components/tech/NoMatch'

import './styles/reset.scss'

function App() {
  const dispatch = useDispatch()
  const category = useSelector(state => state.filter.category)
  const sorting = useSelector(state => state.filter.sorting)
  useEffect(()=>{
    dispatch(getAllBooks())
  },[category, sorting])
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' exact>
            <MainPage />
          </Route>
          <Route path={'/details/:id'}>
            <BookAdvanced /> 
          </Route>
          <Route path='*'>
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App;