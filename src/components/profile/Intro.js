import React from "react";
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom'

const Intro = () => {
  const introData = useSelector((store) => store.userSlice);
  const { username, name, profile_picture, bio, posts, followers, following } =
    introData;

  const postCount = posts.length;
  return (
    <div className="flex gap-20 p-10">
      <div>
        {!profile_picture ? (
          <i className="text-9xl bi bi-person-circle"></i>
        ) : (
          <img
            className="h-40 w-40 rounded-full"
            alt="post"
            src="./IMG_4574.JPG"
          />
        )}
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex gap-5">
          <div>{username}</div>
          <Link to={'/profile/edit'}>
            <button className="bg-gray-800 py-1 px-4 rounded-lg">
              Edit Profile
            </button>
          </Link>
        </div>
        <div className="flex gap-10">
          <div>{postCount} posts</div>
          <div>{followers} followers</div>
          <div>{following} following</div>
        </div>
        <div>{name}</div>
        <div>{bio}</div>
      </div>
    </div>
  );
};

export default Intro;
