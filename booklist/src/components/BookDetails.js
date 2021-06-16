import React, { useContext } from 'react'
import { BookContext } from '../contexts/BookContext'

const BookDetails = ({book}) => {
    const { removeBook } = useContext(BookContext)
    return(
        <li>
            <div>{ book.title }</div>
            <div>{ book.author }</div>
        </li>
    )
}

export default BookDetails