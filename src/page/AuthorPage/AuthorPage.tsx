import React, { FC } from 'react'
import BooKSlide from '../../components/BookSlider/BookSlider'
import { books } from '../../features/homePage/books'
import AuthorInfo from './AuthorInfo/AuthorInfo'

import './AuthorPage.css'

const AuthorPage: FC = () => {
    return (
        <div>
            <AuthorInfo />
            <div className="recommends">
                <div className="recommends-title">
                    <h3>КНИГИ АВТОРА</h3>
                </div>
                <BooKSlide data={books} />
            </div>
        </div>
    )
}

export default AuthorPage
