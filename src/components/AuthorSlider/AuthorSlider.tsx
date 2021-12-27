import { FC } from 'react';
import {Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { addAuthorAction } from '../../state/actions/bookAction';

import './AuthorSlider.css'
import 'swiper/swiper-bundle.css';

interface IAuthor {
  id: number;
  firstName: string;
  lastName: string;
  fullName: string;
  image: string
}

interface AuthorSliderState {
    data: IAuthor[]
}

SwiperCore.use([Navigation, Pagination])
const AuthorSlide: FC<AuthorSliderState> = ({data}) => {
  const dispatch = useDispatch()
    return (    
        <Swiper
        breakpoints = {{
            320: {
              slidesPerView: 2.2,
            },
            430: {
              slidesPerView: 2.7,
            },
            530: {
              slidesPerView: 3.05,
            },
            750: {
              slidesPerView: 4,
              spaceBetween: 10
            },
            // when window width is >= 480px
            1200: {
              slidesPerView: 5,
          
            },
            // when window width is >= 640px
            1700: {
              slidesPerView: 6,
            }
          }}
      spaceBetween={20}
      slidesPerView={6}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)

    
}
    >
      {data.map(author => (
                <SwiperSlide key={author.id} className='slider-con' onClick={() => dispatch(addAuthorAction(author))}>
                                <Link to="/author">
                                <div className="author">
                                    <div className="author-image">
                                        <img src={author.image} alt={author.firstName} />
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
