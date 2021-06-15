import React from 'react'
import BookContextProvider from './contexts/BookContext'
import NavBar from './components/NavBar'

const App = () => {
  return(
    <div>
      <BookContextProvider>
        <NavBar/>
      </BookContextProvider>
    </div>
  )
}

export default App;
