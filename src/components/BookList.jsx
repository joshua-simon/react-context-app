import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

const BookList = () => {

    const { isLightTheme, light, dark } = useContext(ThemeContext)
    const theme = isLightTheme ? light : dark

    return (
        <div className = 'book-list' style = {{ color: theme.syntax, background: theme.bg}}>
            <ul>
                <li>The way of kings</li>
                <li>the name of the wind</li>
                <li>the final empire</li>
            </ul>
        </div>
    )
}

export default BookList