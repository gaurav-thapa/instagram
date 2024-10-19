import React, { useEffect } from "react";
import Intro from "./Intro";
import Story from "./Story";
import Content from "./Content";
import { backendServerURL } from "../../utils/util";
import { useQuery } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";
import { userSliceActions } from "../../store/userSlice";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userID = useSelector((state) => state.userSlice.userID);
  const { data, error, isPending } = useQuery({
    queryKey: ["profile"],
    queryFn: async () => {
      const res = await fetch(backendServerURL + `user/profile/${userID}`);
      const resData = await res.json();
      return resData;
    },
    staleTime:Infinity,
    enabled: userID !== null,
  });
  useEffect(() => {
    if (userID === null) {
      navigate("/auth");
    }
  }, );
  if (isPending) {
    return "Loading...";
  }
  if (error) {
    return "Error = " + error.message;
  }
  if (data) {
    const payload = {
      'followers': data.followers,
      'following': data.following,
      'posts': data.posts,
      'bio': data.user.BIO,
    };
    dispatch(userSliceActions.addUserSlice(payload));
  }
  return (
    <div className="flex mx-auto flex-col w-3/4">
      <Intro />
      <Story />
      <Content />
    </div>
  );
};

export default Profile;
