import { FC } from "react";
import AuthorSlider from "../../components/AuthorSlider/AuthorSlider";
import BooKSlide from "../../components/BookSlider/BookSlider";
import CollentionSlider from "../../components/CollectionSlider/CollectionSlider";
import { author } from "../../features/homePage/author";
import { books } from "../../features/homePage/books";
import { collections } from "../../features/homePage/collections";

import "./HomePage.css";

const HomePage: FC = () => {
  return (
    <div className="homePage">
      <div className="recommends">
        <div className="recommends-title">
          <h3>Рекомендации</h3>
        </div>
        <BooKSlide data={books} />
      </div>

      <div className="recommends">
        <div className="recommends-title">
          <h3>Популярные авторы</h3>
        </div>
        <AuthorSlider data={author} />
      </div>

      <div className="recommends">
        <div className="recommends-title">
          <h3>Подборки</h3>
        </div>
        <CollentionSlider data={collections} />
      </div>
    </div>
  );
};

export default HomePage;
