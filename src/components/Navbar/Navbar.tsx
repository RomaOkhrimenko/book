import React, { FC, useState } from 'react'

import './Navbar.css'

import NavOneImg from '../../assets/image/nav-1.png'
import NavTwoImg from '../../assets/image/nav-2.png'
import NavThreeImg from '../../assets/image/nav-3.png'
import { Link } from 'react-router-dom'
import { useTypesSelector } from '../../hooks/useTypesSelector'
import navClose from '../../assets/image/close.png'
import { useDispatch } from 'react-redux'
import { navbarAction } from '../../state/actions/componentAction'

const Navbar: FC = () => {
    const [navPhone, setNavPhone] = useState(false)
    const {navbarPhone} = useTypesSelector(state => state.component)
    const dispatch = useDispatch()

    function navbarprone() {
        setNavPhone(
            prev => !prev
        )
        dispatch(navbarAction(navPhone))
    }

    return (
        <nav className={navbarPhone ? 'navbar active' : 'navbar'}>
        <div className="navbar-close"onClick={() => navbarprone()}>
            <img id="navbar-close" src={navClose} alt="d" />
        </div>
        <div className="navbar-title">
            <Link to="/"><strong>Okhrim</strong>Company</Link>
        </div>
        <div className="navbar-navigation">
            <div className="navigation-title">
                <img src={NavOneImg} alt="d" />
                <h3>книги/истории</h3>
            </div>
            <ul>
                <li><Link to='/fantasy'>Фантастика, фэнтези</Link></li>
                <li><Link to='/horror'>Ужасы, мистика</Link></li>
                <li><Link to='/horror'>Детективы, триллеры</Link></li>
                 <li><Link to='/roman'>Романы</Link></li>
                 <li><Link to='/bestseller'>Бестселлеры</Link></li>
            </ul>


            <div className="navigation-title">
                <img src={NavTwoImg} alt="d" />
                <h3>подкасты</h3>
            </div>
            <ul>
                <li><a>Интервью</a></li>
                <li><a>Юмор</a></li>
                <li><a>Образовательные</a></li>
                <li><a>Спорт</a></li>
                <li><a>Игры</a></li>
                <li><a>Бизнес</a></li>
            </ul>

            <div className="navigation-title">
                <img src={NavThreeImg} alt="d" />
                <h3>меню</h3>
            </div>
            <ul>
                <li><a>Подборки</a></li>
                <li><a>Авторы</a></li>
                <li><a>Дикторы</a></li>
            </ul>


        </div>
    </nav>
    )
}

export default Navbar
