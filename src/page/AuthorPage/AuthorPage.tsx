import React, { FC } from 'react'
import BooKSlide from '../../components/BookSlider/BookSlider'
import { books } from '../../features/homePage/books'
import { useTypesSelector } from '../../hooks/useTypesSelector'
import AuthorInfo from './AuthorInfo/AuthorInfo'

import './AuthorPage.css'

const AuthorPage: FC = () => {
    const {author} = useTypesSelector(state => state.book)

    return (
        <div>
            <AuthorInfo fullName={author.fullName} image={author.imagelarge} desc={author.desc} />
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
