import React from 'react'
import './card.css';

const Card = ({ children, headerTitle, icon }) => {
    return (
        <div className='card'>
            <div className='card__header'>
                {headerTitle}
                <span dangerouslySetInnerHTML={{ __html: icon }}>
                </span>
            </div>
            <div className='card__content'>
                {children}
            </div>
        </div>
    )
}

export default Card