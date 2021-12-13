import React, { FC } from 'react'

import './Header.css'

import searchImg from '../../assets/image/search.png'
import profileAvatar from '../../assets/image/profileAvatar.png'
import { Link } from 'react-router-dom'



interface HeaderState {
    title?: string
}

const Header: FC<HeaderState> = ({title = 'Войти'}) => {

    return (
        <>
        <header className="header">
            <div className="header-search">
                <input type="text" placeholder='Search...' />
                <img src={searchImg} alt="search" />
            </div>
            <Link to="/profile">
            <div className="header-login">
                  <span>{title}</span>
                  <img src={profileAvatar} alt="profileAvatar" />
            </div>
            </Link>
        </header>
        </>
    )
}

export default Header
