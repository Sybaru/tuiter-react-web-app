import React from "react";
import { useDispatch } from "react-redux";
import { toggleLiked } from "./tuit-reducer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComment,
  faHeart,
  faShareFromSquare,
  faCommentAlt,
} from "@fortawesome/free-solid-svg-icons";
import { updateTuitThunk } from "../../services/tuits-thunks";

const TuitStats = ({ post }) => {
  const dispatch = useDispatch();
  const toggleLikedClickHandler = (tI) => {
    dispatch(updateTuitThunk(tI));
  };
  return (
    <div className="d-flex flex-row w-100 pb-2">
      <span className="flex-fill wd-fg-color-gray">
        <FontAwesomeIcon icon={faComment} />
        <p className="d-inline ps-3">{post.comment}</p>
      </span>
      <span className="flex-fill wd-fg-color-gray">
        <FontAwesomeIcon icon={faCommentAlt} />
        <p className="d-inline ps-3">{post.retweet}</p>
      </span>
      <button
        onClick={() => toggleLikedClickHandler(post)}
        className="wd-fg-color-gray flex-fill bg-transparent border-0 p-0 text-start"
      >
        <span className={post.liked ? "wd-fg-color-red" : ""}>
          <FontAwesomeIcon icon={faHeart} />
        </span>
        <p className="d-inline ps-3">{post.like}</p>
      </button>
      <span className="flex-fill wd-fg-color-gray">
        <FontAwesomeIcon icon={faShareFromSquare} />
      </span>
    </div>
  );
};

export default TuitStats;
