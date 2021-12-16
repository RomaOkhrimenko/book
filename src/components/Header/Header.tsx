import React, { FC, useState } from 'react'

import './Header.css'

import headerMenu from '../../assets/image/menu.png'
import searchImg from '../../assets/image/search.png'
import profileAvatar from '../../assets/image/profileAvatar.png'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { navbarAction } from '../../state/actions/componentAction'



interface HeaderState {
    title?: string
}

const Header: FC<HeaderState> = ({title = 'Войти'}) => {
    const [navbarPhone, setNavbarPhone] = useState(false)

    const dispatch = useDispatch()

    
    

    function navbarphone() {
        setNavbarPhone(
            prev => !prev
        )
        dispatch(navbarAction(navbarPhone))
        console.log(navbarPhone);
    }

    

    return (
        <>
        <header className="header">
            <div className="header-menu" onClick={() => navbarphone()}>
                <img src={headerMenu} alt="headerMenu" />
            </div>
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
