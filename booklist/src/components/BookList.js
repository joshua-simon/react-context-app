import React, { useContext } from 'react'
import { BookContext } from '../contexts/BookContext'
import BookDetails from './BookDetails'

const BookList = () => {
    const { books } = useContext(BookContext)
    return books.length ? (
        <div>
            {
                books.map(book => {
                    return (
                        <BookDetails book = {book} key = {book.id}/>
                    )
                })
            }
        </div>
    )
    :
    (
        <div>
            No books to read. Hello free time!
        </div>
    )
}


export default BookList