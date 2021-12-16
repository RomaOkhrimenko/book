import React, { FC, useEffect, useState } from 'react'
import BooKSlide from '../../components/BookSlider/BookSlider'
import Player from '../../components/Player/Player'
import { books } from '../../features/homePage/books'
import { useTypesSelector } from '../../hooks/useTypesSelector'
import BookInfo from './BookInfo/BookInfo'

import './BookPage.css'
import Comments from './Comments/Comments'

const BookPage: FC = () => {
    const [playerView, setPlayerView] = useState(false)
    
        const {book} = useTypesSelector(state => state.book)

   function viewPlayer() {
       setPlayerView(prev => !prev)
   }
   
    


    return (
        <div className='bookPage'>
            <BookInfo viewPlayer={viewPlayer} image={book.image} title={book.title} author={book.author} desc={book.desc} />
            <div className="recommends">
                <div className="recommends-title">
                    <h3>Похожие</h3>
                    <BooKSlide data={books} />
                </div>
            </div>
            <Comments />
            {playerView ? <Player image={book.image} title={book.title} author={book.author} viewPlayer={viewPlayer} /> : null}
            
        </div>
    )
}

export default BookPage
