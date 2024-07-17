import React from 'react'
import './button.css';

const Button = ({ title, onClick, styleType = 'default' }) => {
    return (
        <button
            className={`button ${styleType}`}
            onClick={onClick}
        >
            {title}
        </button>
    )
}

export default Button