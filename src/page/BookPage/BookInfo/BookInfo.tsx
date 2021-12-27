import { FC } from 'react'

import './BookInfo.css'

import playImg from '../../../assets/image/books/play.png'
import starImg from '../../../assets/image/books/star.png'
import starDesc from '../../../assets/image/books/star-rate-desc.png'
import arrowRight from '../../../assets/image/arrow-right.png'
import writesImg from '../../../assets/image/books/writes.png'
import voiceOver from '../../../assets/image/books/voiceover.png'
import headphones from '../../../assets/image/books/headphones.png'
import clock from '../../../assets/image/books/clock.png'

interface BookInfo {
    viewPlayer: () => void
    image: string,
    title: string,
    author: string,
    desc: string
}

const BookInfo: FC<BookInfo> = ({image, title, author, desc, viewPlayer}) => {
    return (
        <div className="about-book">
                    <div className="phone-book-genre">
                        <img src={arrowRight} alt={title}/>
                         <h5>Фантастика, фэнтези, мистика</h5>
                    </div>
                    <div className="book-img-rate">
                        <div className="about-book-img">
                            <img className="book-image-preview" src={image} alt={title}/>
                            <div className='book-play-con' onClick={() => viewPlayer()}>
                            <img className="book-image-play" src={playImg} alt={title}/>
                            </div>
                        </div>

                        <div className="book-rate">
                            <img src={starImg} alt={title}/>
                            <img src={starImg} alt={title}/>
                            <img src={starImg} alt={title}/>
                            <img src={starImg} alt={title}/>
                            <img src={starImg} alt={title}/>
                            <h5>Оцените книгу</h5>
                        </div>
                    </div>

                    <div className="about-book-info">
                        <div className="about-genre">
                            <img src={arrowRight} alt={title}/>
                            <h5>Фантастика, фэнтези, мистика</h5>
                        </div>
                        <div className="about-title-rate">
                            <h4>{title}</h4>
                            <img src={starDesc} alt={title}/>
                            <h5>3.5</h5>
                        </div>
                        <div className="about-writers">
                            <img src={writesImg} alt={title}/>
                            <p>{author}</p>
                        </div>
                        <div className="about-voiceover">
                            <img src={voiceOver} alt={title}/>
                            <p>Анастасия Максимова</p>
                        </div>
                        <div className="about-cycle">
                            <h4>Цикл</h4>
                            <h5>Охотники за мирами (1)</h5>

                            <div className="about-cycle-hear-time">
                                <div className="cycle-hear">
                                    <img src={headphones} alt={title}/>
                                    <p>94</p>
                                </div>
                                <div className="cycle-time">
                                    <img src={clock} alt={title}/>
                                    <p>07:39:16</p>
                                </div>
                            </div>
                        </div>

                        <div className="about-desc-book">
                            <p>{desc}
                            </p>
                           
                        </div>
                    </div>
                </div>
    )
}

export default BookInfo
