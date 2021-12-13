import React, { FC } from 'react'

import './GenrePage.css'

import writesImg from '../../assets/image/books/writes.png'
import clock from '../../assets/image/clock.png'
import like from '../../assets//image/like.png'

interface GenrePage {
    title: string
    data: any[]
}

const GenresPage: FC<GenrePage> = ({title, data}) => {
    return (
        <div className='result-search'>
            <div className="result-search-title">
                <h3>{title}</h3>
            </div>
            {data.map(book => (
                <div className="result-search-book">
                <img src={book.image} alt="" />
                <div className="search-book-info">
                    <h4>{book.book}</h4>
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
                <div className="search-book-like"><img src={like} alt="like" /></div>
            </div>
            ))}
            
        </div>
    )
}

export default GenresPage
