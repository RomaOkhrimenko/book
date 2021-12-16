import axios from 'axios'
import React, { FC, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Button from '../../components/PlayerTest/Controls/Button'
import { useTypesSelector } from '../../hooks/useTypesSelector'
import { fetchBestsellerAction } from '../../state/actions/bookAction'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import './Bestseller.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Bestseller: FC = () => {
    const dispatch = useDispatch()
    const {bestseller} = useTypesSelector(state => state.book)
    

    useEffect(() => {
        dispatch(fetchBestsellerAction())
    }, [])

    return (
        <div className='bestseller'>
            <div className="bestseller-container">
            {bestseller.map(book => {
                return <div key={book.rank} className='bestseller-book'>
                    
                    <img src={book.book_image} alt={book.title} />
                    <div className="bestseller-buy">
                        <div>
                        {book.buy_links.map((buy:any) => {
                           return <div> <a href={buy.url}data-tooltip={buy.name} type="_blank"><FontAwesomeIcon icon={faShoppingCart}/></a>
                                    <div className="bestseller-buy-info">
                                    <span>{buy.name}</span>
                                </div>
                        </div>
                        })}
                        </div>
                    </div>
                </div>
            })}
            </div>
        </div>
    )
}

export default Bestseller
