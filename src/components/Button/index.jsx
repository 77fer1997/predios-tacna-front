import React from 'react'
import "./style.css"
export const Button = ({ children, type }) => {
    return (
        <button type={type} className='btn'>{children}</button>
    )
}