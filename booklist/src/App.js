import React from 'react'
import BookContextProvider from './contexts/BookContext'
import NavBar from './components/NavBar'
import BookList from './components/BookList'

const App = () => {
  return(
    <div>
      <BookContextProvider>
        <NavBar/>
        <BookList/>
      </BookContextProvider>
    </div>
  )
}

export default App;
