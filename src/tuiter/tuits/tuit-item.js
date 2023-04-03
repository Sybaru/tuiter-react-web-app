import React from "react";
import { useDispatch } from "react-redux";
import { deleteTuit } from "./tuit-reducer";
import TuitStats from "./tuit-stats";
import {deleteTuitThunk} from "../../services/tuits-thunks";

const TuitItem = ({ post }) => {
  const dispatch = useDispatch();
  const deleteTuitHandler = (id) => {
    dispatch(deleteTuitThunk(id));
  };
  return (
    <li className="list-group-item d-flex flex-row w-100">
      <div className="col-1 me-3">
        <img
          height="50px"
          src={`${post.avatarIcon}`}
          width="50px"
          className="rounded-circle"
          alt="p"
        />
      </div>
      <div className="flex-column flex-fill">
        <i
          className="bi bi-x-lg float-end"
          onClick={() => deleteTuitHandler(post._id)}
        />
        <p className="mb-0">
          <span className="fw-bold">{post.username} </span>
          <i className="fa fa-check-circle" />{" "}
          <span className="text-secondary">
            {post.handle} • {post.time}
          </span>
        </p>
        <p>{post.tuit}</p>
        <div className="rounded-lg">
                <img src={`${post.image}`} width="100%" className="mb-2" style={{borderRadius: 20}} />
        </div>
        <TuitStats post={post} />
      </div>
    </li>
  );
};

export default TuitItem;
