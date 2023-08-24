import React from 'react'
import "./style.css"
export const Button = ({ children, type }) => {

    const getTypeButton = (type = '') => {
        if (type === "outline") {
            return 'btn--outline'
        }
        return ''
    }

    return (
        <button type={type} className={`btn ${getTypeButton(type)}`}>{children}</button>
    )
}