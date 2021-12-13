import React, { FC } from 'react'
import BooKSlide from '../../components/BookSlider/BookSlider'
import Player from '../../components/Player/Player'
import { books } from '../../features/homePage/books'
import BookInfo from './BookInfo/BookInfo'

import './BookPage.css'
import Comments from './Comments/Comments'

const BookPage: FC = () => {
    return (
        <div>
            <BookInfo />
            <div className="recommends">
                <div className="recommends-title">
                    <h3>Похожие</h3>
                    <BooKSlide data={books} />
                </div>
            </div>
            <Comments />
            <Player />
        </div>
    )
}

export default BookPage
