import { createSlice } from "@reduxjs/toolkit";
import tuits from './tuit.json';

const currentUser = {
  "userName": "user",
  "handle": "@user",
  "avatarIcon": "https://twirpz.files.wordpress.com/2015/06/twitter-avi-gender-balanced-figure.png",
};

const templateTuit = {
  ...currentUser,
  "time": "2h",
  "liked": false,
  "replies": "0",
  "retuits": "0",
  "likes": "0",
  "image": ""
}

const tuitsSlice = createSlice({
  name: 'tuits',
  initialState: tuits,
  reducers: {
    toggleLiked(state, action) {
      const tuitItem = state.find((tuitItem) =>
          tuitItem._id === action.payload._id)
      tuitItem.liked = !tuitItem.liked
      if (tuitItem.liked) {
        tuitItem.like++;
      } else {
        tuitItem.like--;
      }
    },
    createTuit(state, action) {
      state.unshift({
        ...action.payload,
        ...templateTuit,
        _id: (new Date()).getTime(),
      })
    },
    deleteTuit(state, action) {
      const index = state
      .findIndex(tuit =>
          tuit._id === action.payload);
      state.splice(index, 1);
    },
  }
});

export const {
  toggleLiked, createTuit, deleteTuit
} = tuitsSlice.actions;
export default tuitsSlice.reducer;