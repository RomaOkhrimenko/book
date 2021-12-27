import { FC } from 'react'
import {Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination, Scrollbar } from 'swiper';

import 'swiper/swiper-bundle.css';
import './CollectionSlider.css'

import clock from '../../assets/image/clock.png'
import booksCol from '../../assets/image/collection/book-collection.png'

interface ICollection {
  id: number;
  genres: any;
  books: number;
  title: string;
  image: string;
  time: string | number;
}

interface CollectionSlideState {
    data: ICollection[]
}


SwiperCore.use([Navigation, Pagination, Scrollbar])
const CollentionSlider: FC<CollectionSlideState> = ({data}) => {
  
    return (    
        <Swiper
        breakpoints = {{
            320: {
              slidesPerView: 1.2,
            },
            450: {
              slidesPerView: 1.5
            },
            650: {
              slidesPerView: 2
            },
            750: {
              slidesPerView: 2.5
            },
            995: {
              slidesPerView: 2,
            
            },
            1150: {
              slidesPerView: 2.5
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
                                
                                <div className="collection">
                                        <img src={collection.image} alt={collection.title}/>
                                        <h4>{collection.title}</h4>
                                        <div className="collection-book-time">
                                            <div className="collection-books">
                                                <img src={booksCol} alt={collection.title}/>
                                                <span>{`${collection.books} книг`}</span>
                                            </div>
                                            <div className="collection-time">
                                                <img src={clock} alt={collection.title}/>
                                                <span>{collection.time}</span>
                                            </div>
                                        </div>
                                        
                                        <div className="collection-genre">
                                            <h4>{collection.genres.genre1}</h4>
                                            <h4>{collection.genres.genre2}</h4>
                                        </div>
                                    </div>
                            
                </SwiperSlide>
            ))}
    </Swiper>
    )
}

export default CollentionSlider
