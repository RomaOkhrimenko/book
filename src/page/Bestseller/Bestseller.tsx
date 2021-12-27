import { FC, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useTypesSelector } from '../../hooks/useTypesSelector'
import { fetchBestsellerAction } from '../../state/actions/bookAction'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import './Bestseller.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Loader from '../../components/Loader/Loader'

const Bestseller: FC = () => {
    const dispatch = useDispatch()
    const {bestseller, loader} = useTypesSelector(state => state.book)
    

    useEffect(() => {
        dispatch(fetchBestsellerAction())
    }, [])

    return (
        <div className='bestseller'>
            <div className="bestseller-container">
                {loader ? <div className='loader'><Loader /></div> : null}
            {bestseller.map(book => {
                return <div key={book.rank} className='bestseller-book'>
                    
                    <img src={book.book_image} alt={book.title} />
                    <div className="bestseller-buy">
                        <div>
                        {book.buy_links.map((buy:any, index:number) => {
                           return <div key={index}> <a href={buy.url}data-tooltip={buy.name} type="_blank"><FontAwesomeIcon icon={faShoppingCart}/></a>
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
