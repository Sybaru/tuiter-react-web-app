import React from "react";
import {useSelector} from "react-redux";
import TuitItem from "./tuit-item";

const TuitList = () => {
  const tuitsArray = useSelector(state => state.tuitItem)
  return(
      <ul className="list-group">
        {
          tuitsArray.map(tuitItem => <TuitItem key={tuitItem._id} post={tuitItem}/>)
        }
      </ul>
  );
};
export default TuitList;