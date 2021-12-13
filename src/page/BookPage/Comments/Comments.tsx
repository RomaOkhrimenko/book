import React, { FC } from "react";
import { comments } from "../../../features/bookPage/comments";

import "./Comments.css";


import profileava from '../../../assets/image/books/codicon_account.png'

const Comments: FC = () => {
  return (
      <div>
    <div className="comments-book">
      {comments.map((comment) => (
        <div key={comment.id} className="comment">
          <div className="comment-ava">
            <img src={comment.avatar} alt="" />
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
        <a href="#">Показать ещё</a>
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
        <a href="#">Опубликовать</a>
      </div>
    </div>
  );
};

export default Comments;
