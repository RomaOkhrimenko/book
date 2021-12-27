import { FC } from 'react'
import { auth } from '../../firebase/firebase'

import './ProfilePage.css'

import BooKSlide from '../../components/BookSlider/BookSlider';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../state/actions/userAction';
import { useTypesSelector } from '../../hooks/useTypesSelector';

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
                {books.length === 0 
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
