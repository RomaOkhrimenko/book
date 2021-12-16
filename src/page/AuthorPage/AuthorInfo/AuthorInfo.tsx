import React, { FC } from "react";

import "./AuthorInfo.css";

import author from "../../../assets/image/authors/stiv.png";
import starImg from "../../../assets/image/books/star.png";
import starDesc from "../../../assets/image/books/star-rate-desc.png";
import bookOpen from "../../../assets/image/authors/book-open.png";

interface AuthorState {
  fullName: string
  image: any
  desc: string
}

const AuthorInfo: FC<AuthorState> = ({fullName, image, desc}) => {
  return (
    <div className="main-author">
      <div className="author-image-rate">
        <img src={image} alt="" />
        <div className="author-rate">
          <div className="author-rate-star">
            <img src={starImg} alt="starImg" />
            <img src={starImg} alt="starImg" />
            <img src={starImg} alt="starImg" />
            <img src={starImg} alt="starImg" />
            <img src={starImg} alt="starImg" />
          </div>
          <span>Оцените автора</span>
        </div>
      </div>

      <div className="author-info">
        <div className="author-info-title">
          <h4>{fullName}</h4>
          <img src={starDesc} alt="starDesc" />
          <span>4.6</span>
        </div>
        <div className="author-all-boks">
          <img src={bookOpen} alt="bookOpen" />
          <p>313</p>
        </div>
        <div className="about-author">
          <p>
            {desc}
          </p>
        </div>
        <div className="author-facts">
          <h4>Интересные факты</h4>
          <ul>
            <li>
              Матери писателя диагностировали бесплодие, в результате чего она с
              мужем усыновила мальчика по имени Дэвид Виктор. Но, вопреки
              прогнозам врачей, женщина забеременела и родила Стивена.
            </li>
            <li>
              Стивену едва исполнилось два года, когда гулена-отец сбежал из
              семьи. Мать говорила сыновьям, что отца похитили марсиане.
              Возможно, эта белая ложь стала вдохновением для написания мрачных
              историй.
            </li>
          </ul>
        </div>
      </div>

      <div className="author-rate phone">
        <div className="author-rate-star">
          <img src={starImg} alt="starImg" />
          <img src={starImg} alt="starImg" />
          <img src={starImg} alt="starImg" />
          <img src={starImg} alt="starImg" />
          <img src={starImg} alt="starImg" />
        </div>
        <span>Оцените автора</span>
      </div>
    </div>
  );
};

export default AuthorInfo;
