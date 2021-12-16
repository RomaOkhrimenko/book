import React, { FC } from 'react'

import './GenrePage.css'

import writesImg from '../../assets/image/books/writes.png'
import clock from '../../assets/image/clock.png'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addBookAction } from '../../state/actions/bookAction'

interface GenrePage {
    title: string
    data: any[]
}

const GenresPage: FC<GenrePage> = ({title, data}) => {
    const dispatch = useDispatch()

    return (
        <div className='result-search'>
            <div className="result-search-title">
                <h3>{title}</h3>
            </div>
            {data.map(book => (
                
                <div className="result-search-book">
                <Link to="/book">
                <img onClick={() => dispatch(addBookAction(book))} src={book.image} alt="" />
                </Link>
                <div className="search-book-info">
                    <h4>{book.title}</h4>
                    <p>{book.desc}</p>
                    <div className="writers">
                        <div className="search-book-writers">
                            <img src={writesImg} alt="writesImg" />
                            <span>{book.author}</span>
                        </div>
                    </div>
                    <div className="search-book-time">
                        <img src={clock} alt="clock" />
                        <p>{book.time}</p>
                    </div>
                </div>
            </div>
            ))}
            
        </div>
    )
}

export default GenresPage
