import React from 'react'
import './itemListing.css';
import Button from '../button';

const ItemListing = ({ list = [], title = '', onClick, actionTitle }) => {
    return (
       
            <div className='item-listing'>
                <span className='item-listing__title'>
                    {title}
                    <Button
                        styleType='noBorder'
                        onClick={onClick}
                        title={actionTitle}
                    />
                </span>
                { list.length > 0  ? 
                <ul className='item-listing__list-container'>
                    {list.map((_list, index) => {
                        return (
                            <li key={`${_list}--${index}`} className='item-listing__list-container__list'>
                                {_list}
                            </li>
                        )
                    })}
                </ul> : <span className='item-listing__list-container__no-data'>No Data Available</span>}
            </div> 

    )
}

export default ItemListing