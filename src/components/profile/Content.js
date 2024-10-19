import React from "react";
import Posts from "./content/Posts";
import { useSelector } from "react-redux";

const Content = () => {
  const posts = useSelector((store) => store.userSlice.posts);
  return (
    <div className="flex flex-col items-center">
      <div className="flex gap-10 text-xs p-4">
        <div className="hover:cursor-pointer">
          <i className="me-3 bi bi-grid-3x3"></i>
          <span>POSTS</span>
        </div>
        <div className="hover:cursor-pointer">
          <i className="me-3 bi bi-camera-reels"></i>
          <span>REELS</span>
        </div>
        <div className="hover:cursor-pointer">
          <i className="me-3 bi bi-bookmark"></i>
          <span>SAVED</span>
        </div>
        <div className="hover:cursor-pointer">
          <i className="me-3 bi bi-person-square"></i>
          <span>TAGGED</span>
        </div>
      </div>
      <div className="mb-10">
        <Posts posts={posts} />
      </div>
    </div>
  );
};

export default Content;
