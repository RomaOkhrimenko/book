import React, { FC } from 'react'

import './Navbar.css'

import NavOneImg from '../../assets/image/nav-1.png'
import NavTwoImg from '../../assets/image/nav-2.png'
import NavThreeImg from '../../assets/image/nav-3.png'
import { Link } from 'react-router-dom'

const Navbar: FC = () => {
    return (
        <nav className="navbar">
        <div className="navbar-close">
            <img id="navbar-close" src="./assets/image/close.png" alt="d" />
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
                <li><Link to='/book'>Фантастика, фэнтези</Link></li>
                <li><Link to='/horror'>Ужасы, мистика</Link></li>
                <li><a>Детективы, триллеры</a></li>
                 <li><a>Романы</a></li>
                 <li><a>Научные</a></li>
                 <li><a>Бизнес</a></li>
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
