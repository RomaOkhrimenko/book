import React, { FC } from 'react'
import {Swiper, SwiperSlide } from 'swiper/react'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import SwiperCore, { Navigation, Pagination, Scrollbar } from 'swiper';

import 'swiper/swiper-bundle.css';
import './BookSlider.css'

import Like from '../../assets/image/like.png'
import search from '../../assets/image/search.png'



import { addBook } from '../../state/actions/favoriteAction';

interface BookSlideState {
    data: any[]
}


SwiperCore.use([Navigation, Pagination, Scrollbar])
const BooKSlide: FC<BookSlideState> = ({data}) => {
  const dispatch = useDispatch()
  
    return (    
        <Swiper
        breakpoints = {{
            320: {
              slidesPerView: 1.5,
            },
            330: {
              slidesPerView: 2.05,
            },
            650: {
              slidesPerView: 4
            },
            830: {
              slidesPerView: 5
            },
            995: {
              slidesPerView: 3,
            
            },
            // when window width is >= 480px
            1200: {
              slidesPerView: 4,
          
            },
            // when window width is >= 640px
            1700: {
              slidesPerView: 6,
            }
          }}
      spaceBetween={50}
      slidesPerView={6}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)

    
}
    >
      {data.map((book, index) => (
                <SwiperSlide key={book.id} className='slider-con'>
                                
                                <div className="book">
                                <Link to="/book">
                                    <img src={book.image} alt="" />
                                    </Link>
                                    <h4>{book.title}</h4>
                                    <h5>{book.author}</h5>
                                   
                                    <div className="book-like" onClick={() => dispatch(addBook(book))}>{book.liked ? <img src={search} alt="" /> : <img src={Like} alt="" />}</div>
                                </div>
                            
                </SwiperSlide>
            ))}
    </Swiper>
    )
}

export default BooKSlide
