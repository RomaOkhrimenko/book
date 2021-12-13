import React, { FC } from 'react'
import {Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination, Scrollbar } from 'swiper';

import 'swiper/swiper-bundle.css';
import './CollectionSlider.css'

import Like from '../../assets/image/like.png'
import clock from '../../assets/image/clock.png'
import booksCol from '../../assets/image/collection/book-collection.png'

interface CollectionSlideState {
    data: any[]
}


SwiperCore.use([Navigation, Pagination, Scrollbar])
const CollentionSlider: FC<CollectionSlideState> = ({data}) => {
    return (    
        <Swiper
        breakpoints = {{
            320: {
              slidesPerView: 1.1,
            },
            330: {
              slidesPerView: 1.05,
            },
            650: {
              slidesPerView: 2
            },
            830: {
              slidesPerView: 3
            },
            995: {
              slidesPerView: 3,
            
            },
            // when window width is >= 480px
            1200: {
              slidesPerView: 2,
          
            },
            // when window width is >= 640px
            1700: {
              slidesPerView: 3.7,
            }
          }}
      spaceBetween={20}
      slidesPerView={3.7}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)

    
}
    >
      {data.map(collection => (
                <SwiperSlide key={collection.id} className='slider-con'>
                                <a href="book.html">
                                <div className="collection">
                                        <img src={collection.image} alt={collection.title}/>
                                        <h4>{collection.title}</h4>
                                        <div className="collection-book-time">
                                            <div className="collection-books">
                                                <img src={booksCol} alt=""/>
                                                <span>{`${collection.books} книг`}</span>
                                            </div>
                                            <div className="collection-time">
                                                <img src={clock} alt=""/>
                                                <span>{collection.time}</span>
                                            </div>
                                        </div>
                                        
                                        <div className="collection-genre">
                                            <h4>{collection.genres.genre1}</h4>
                                            <h4>{collection.genres.genre2}</h4>
                                        </div>
                                    </div>
                            </a>
                </SwiperSlide>
            ))}
    </Swiper>
    )
}

export default CollentionSlider
