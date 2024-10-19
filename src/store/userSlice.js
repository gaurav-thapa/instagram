import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "userSlice",
  initialState: {
    userID: null,
    username: null,
    name: null,
    profile_picture: null,
    bio: null,
    posts: null,
    followers: null,
    following: null,
  },
  reducers: {
    addUserSlice: (state, action) => {
      const {
        userID,
        username,
        name,
        profile_picture,
        bio,
        posts,
        followers,
        following,
      } = action.payload;

      console.log("payload data - ", action.payload.followers);
      if (userID) state.userID = userID;
      if (username) state.username = username;
      if (name) state.name = name;
      if (profile_picture) state.profile_picture = profile_picture;
      if (bio) {
        console.log("updating bio in redux store!");
        state.bio = bio;
      }
      if (posts) state.posts = posts;
      if (followers!==null) {
        console.log("updating followers in redux store!");

        state.followers = followers;
      }
      if (following!==null) state.following = following;
    },
  },
});

export const userSliceReducer = userSlice.reducer;
export const userSliceActions = userSlice.actions;
