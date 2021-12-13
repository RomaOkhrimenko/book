import React, { FC } from 'react';
import {Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination, Scrollbar } from 'swiper';

import 'swiper/swiper-bundle.css';
import './AuthorSlider.css'
import { Link } from 'react-router-dom';

interface AuthorSliderState {
    data: any[]
}


SwiperCore.use([Navigation, Pagination])
const AuthorSlide: FC<AuthorSliderState> = ({data}) => {
    return (    
        <Swiper
        breakpoints = {{
            320: {
              slidesPerView: 2.5,
            },
            330: {
              slidesPerView: 3.05,
            },
            650: {
              slidesPerView: 5
            },
            830: {
              slidesPerView: 6
            },
            995: {
              slidesPerView: 4,
            
            },
            // when window width is >= 480px
            1200: {
              slidesPerView: 5,
          
            },
            // when window width is >= 640px
            1700: {
              slidesPerView: 7,
            }
          }}
      spaceBetween={20}
      slidesPerView={7}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)

    
}
    >
      {data.map(author => (
                <SwiperSlide key={author.id} className='slider-con'>
                                <Link to="/author">
                                <div className="author">
                                    <div className="author-image">
                                        <img src={author.image} alt="" />
                                    </div>
                                    <h4>{author.firstName}</h4>
                                    <h4>{author.lastName}</h4>
                                </div>
                            </Link>
                </SwiperSlide>
            ))}
    </Swiper>
    )
}

export default AuthorSlide
