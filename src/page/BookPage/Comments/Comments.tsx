import { FC } from "react";
import { comments } from "../../../features/bookPage/comments";

import "./Comments.css";


import profileava from '../../../assets/image/books/codicon_account.png'
import { Link } from "react-router-dom";

const Comments: FC = () => {
  return (
      <div>
    <div className="comments-book">
      {comments.map((comment) => (
        <div key={comment.id} className="comment">
          <div className="comment-ava">
            <img src={comment.avatar} alt="d" />
          </div>
          <div className="comment-desc">
            <div className="name-rate">
              <h4>{comment.name}</h4>
            </div>
            <p>{comment.text}</p>
          </div>
        </div>
      ))}

      <div className="more-btn">
        <Link to="/">Показать ещё</Link>
      </div>
    </div>

    <div className="comment-area">
                    <div className="area-container">
                        <div className="ava">
                            <img src={profileava} alt="" />
                        </div>
                        <textarea placeholder="Написать комментарий..." />
                    </div>
                </div>

                <div className="more-btn">
        <Link to="/">Опубликовать</Link>
      </div>
    </div>
  );
};

export default Comments;
