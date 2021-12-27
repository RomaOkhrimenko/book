import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import SwiperCore, { Navigation, Pagination, Scrollbar } from "swiper";

import "swiper/swiper-bundle.css";
import "./BookSlider.css";

import Like from "../../assets/image/like.png";
import search from "../../assets/image/search.png";

import { addBookAction } from "../../state/actions/bookAction";
import { addBookFavorite } from "../../state/actions/favoriteAction";

interface IBook {
  id: number;
  title: string;
  author: string;
  image: any;
  liked?: boolean;
}

interface BookSlideState {
  data: IBook[];
}

SwiperCore.use([Navigation, Pagination, Scrollbar]);
const BooKSlide: FC<BookSlideState> = ({ data }) => {
  const dispatch = useDispatch();

  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1.6,
          spaceBetween: 20,
        },
        434: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        554: {
          slidesPerView: 2.5,
        },
        650: {
          slidesPerView: 3,
        },
        830: {
          slidesPerView: 4,

          spaceBetween: 20,
        },
        994: {
          slidesPerView: 3.5
        },
        1270: {
          slidesPerView: 4.5
        },
        1460: {
          slidesPerView: 5,
        },
        // when window width is >= 640px
        1700: {
          slidesPerView: 6,
        },
      }}
      spaceBetween={50}
      slidesPerView={6}
    >
      {data.map((book) => (
        <SwiperSlide
          key={book.id}
          className="slider-con"
          onClick={() => dispatch(addBookAction(book))}
        >
          <div className="book">
            <Link to="/book">
              <img src={book.image} alt={book.title} />
            </Link>
            <h4>{book.title}</h4>
            <h5>{book.author}</h5>

            <div
              className="book-like"
              onClick={() => dispatch(addBookFavorite(book, book.id))}
            >
              {book.liked ? (
                <img src={search} alt={book.title} />
              ) : (
                <img src={Like} alt={book.author} />
              )}
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default BooKSlide;
