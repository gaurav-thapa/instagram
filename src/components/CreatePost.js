import React from "react";
import { backendServerURL } from "../utils/util";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useQueryClient } from "@tanstack/react-query";

const CreatePost = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const userID = useSelector((store) => store.userSlice.userID);
  const uploadPost = async (data) => {
    const res = await fetch(backendServerURL + "post/create", {
      body: JSON.stringify({
        userID: userID,
        mediaURL:
          "https://objectstorage.ap-hyderabad-1.oraclecloud.com/p/MW_tHGTC3zCkKS_qiZpqLBNZ88AwDnxAgP5iqJXVgU2dkaooA0lX46YT1PxZQMev/n/ax0nc8zibo5e/b/bucket-20241014-1545/o/insta/insta-imageIMG_4574.JPG",
        ...data,
      }),
      headers: {
        'Content-Type': "application/json",
      },
      method: "POST",
    });
    const resData = await res.json();
    console.log(resData);
    queryClient.invalidateQueries(['profile']);
    
    // navigate('/');
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    uploadPost(data);
  };
  return (
    <form onSubmit={onSubmitHandler} className="flex flex-col p-10 h-full">
      <div className="h-52 bg-yellow-400 mb-3">Image</div>
      <div className="flex flex-col mb-5 gap-3">
        <label htmlFor="caption">Caption</label>
        <textarea
          name="caption"
          id="caption"
          rows={4}
          className="bg-black text-white border-2 rounded"
        ></textarea>
      </div>
      <button className="bg-blue-500 hover:bg-blue-600 p-2 rounded">
        Upload
      </button>
    </form>
  );
};

export default CreatePost;
