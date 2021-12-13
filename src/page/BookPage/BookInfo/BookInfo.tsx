import React, { FC } from 'react'

import './BookInfo.css'

import Ava from '../../../assets/image/books/Liya_Arden__Mara_i_Morok.png'
import playImg from '../../../assets/image/books/play.png'
import starImg from '../../../assets/image/books/star.png'
import starDesc from '../../../assets/image/books/star-rate-desc.png'
import arrowRight from '../../../assets/image/arrow-right.png'
import writesImg from '../../../assets/image/books/writes.png'
import voiceOver from '../../../assets/image/books/voiceover.png'
import headphones from '../../../assets/image/books/headphones.png'
import clock from '../../../assets/image/books/clock.png'



const BookInfo: FC = () => {
    return (
        <div className="about-book">
                    <div className="phone-book-genre">
                        <img src="./assets/image/arrow-right.png" alt=""/>
                         <h5>Фантастика, фэнтези, мистика</h5>
                    </div>
                    <div className="book-img-rate">
                        <div className="about-book-img">
                            <img className="book-image-preview" src={Ava} alt=""/>
                            <div className='book-play-con'>
                            <img className="book-image-play" src={playImg} alt=""/>
                            </div>
                        </div>

                        <div className="book-rate">
                            <img src={starImg} alt=""/>
                            <img src={starImg} alt=""/>
                            <img src={starImg} alt=""/>
                            <img src={starImg} alt=""/>
                            <img src={starImg} alt=""/>
                            <h5>Оцените книгу</h5>
                        </div>
                    </div>

                    <div className="about-book-info">
                        <div className="about-genre">
                            <img src={arrowRight} alt=""/>
                            <h5>Фантастика, фэнтези, мистика</h5>
                        </div>
                        <div className="about-title-rate">
                            <h4>Мара и морок</h4>
                            <img src={starDesc} alt=""/>
                            <h5>3.5</h5>
                        </div>
                        <div className="about-writers">
                            <img src={writesImg} alt=""/>
                            <p>Лия Арден</p>
                        </div>
                        <div className="about-voiceover">
                            <img src={voiceOver} alt=""/>
                            <p>Анастасия Максимова</p>
                        </div>
                        <div className="about-cycle">
                            <h4>Цикл</h4>
                            <h5>Охотники за мирами (1)</h5>

                            <div className="about-cycle-hear-time">
                                <div className="cycle-hear">
                                    <img src={headphones} alt=""/>
                                    <p>94</p>
                                </div>
                                <div className="cycle-time">
                                    <img src={clock} alt=""/>
                                    <p>07:39:16</p>
                                </div>
                            </div>
                        </div>

                        <div className="about-desc-book">
                            <p>Я умерла много лет назад, но когда моя помощь понадобилась правителям Аракена, меня подняли из могилы. Таких, как я, в народе называют Марами. Когда-то давно нас было семеро. Меня и шестерых сестер были отметила сама богиня смерти Морана. Сейчас лишь немногие помнят о том, что мы избавляли леса от нечисти и отправляли неупокоенные души в потусторонний мир. Годами позже мы оказались втянуты в политику, и это нас всех и погубило. И теперь байками о Марах, скитающихся по земле с собственной головой подмышкой, пугают детей…
                            </p>
                            <p>Но даже мы кое-кого боимся, и имя ему – Морок. Слуга самой Тени поднял меня из земли и оживил, привязав к себе чарами. Если попробую я сбежать, он тут же выследит меня, словно пес, может и в Тень отправить. А там гораздо хуже, чем в сырой земле… Поэтому мне придется быть послушной, пока я не придумаю, как избавиться от связи с Мороком. У меня появился шанс отомстить за наши с сестрами загубленные жизни, и я его использую.</p>
                        </div>
                    </div>
                </div>
    )
}

export default BookInfo
