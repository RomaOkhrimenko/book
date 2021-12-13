import React, { FC } from 'react'
import firebase from 'firebase'
import { auth } from '../../firebase/firebase'

import './ProfilePage.css'

import BooKSlide from '../../components/BookSlider/BookSlider';
import AuthorSlide from '../../components/AuthorSlider/AuthorSlider';
import { author } from '../../features/homePage/author';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../state/actions/userAction';
import { useTypesSelector } from '../../hooks/useTypesSelector';

const user = firebase.auth().currentUser

console.log(user);

const ProfilePage: FC = () => {
    const { books } = useTypesSelector(state => state.favorite)
    const dispatch = useDispatch()
    const name = auth.currentUser?.displayName

    return (
        <div className='profile'>
            <h2>{name}</h2>

            <div>
            <div className="recommends">
                <div className="recommends-title">
                <h3>Избранные Книги</h3>
                </div>
                {books.length == 0 
                ? 
                    <div className='FavoriteBooks'>
                        <div className="favoriteEmpy">
                        <span>У вас еще нет избранных книг</span>
                        </div>
                    </div>
                :
                <BooKSlide data={books} />
                }
            </div>
        </div>

        <div className="exit">

        <button onClick={() => dispatch(logoutUser())}>Выйти</button>
        </div>

        </div>
    )
}

export default ProfilePage
