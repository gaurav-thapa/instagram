import { useQuery, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { backendServerURL } from "../../utils/util";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userSliceActions } from "../../store/userSlice";
const EditProfile = () => {
  const user = useSelector((store) => store.userSlice);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { userID, username, name, profile_picture, bio } = user;

  const saveProfile = async (data) => {
    const res = await fetch(backendServerURL + 'user/saveProfile',
      {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
    if (!res.ok) {
      const data = await res.json();
      console.log(data);
    }
    else {
      console.log('edit success');
      dispatch(userSliceActions.addUserSlice(data));
      queryClient.invalidateQueries(['profile']);
    }
  }
  const onFormSubmitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    const dataWithUserID = { 'userID': userID, profile_picture: 'https://objectstorage.ap-hyderabad-1.oraclecloud.com/p/MW_tHGTC3zCkKS_qiZpqLBNZ88AwDnxAgP5iqJXVgU2dkaooA0lX46YT1PxZQMev/n/ax0nc8zibo5e/b/bucket-20241014-1545/o/insta/insta-imageIMG_4574.JPG', ...data };
    saveProfile(dataWithUserID);
    navigate('/');
  };
  // const { data, error, isPending } = useQuery({
  //   queryKey: ["profile"],
  //   queryFn: async () => {
  //     const res = await fetch(backendServerURL + "user/get/grv.thapa");
  //     const result = await res.json();
  //     return result;
  //   },
  //   staleTime: Infinity,
  //   gcTime: Infinity,
  // });
  // if (isPending) {
  //   return "Loading...";
  // }
  // if (error) {
  //   return "An error occurred - " + error.message;
  // }
  // const {userid, username, name, profile_picture, bio, country_code, phone, email} = data;
  return (
    <div className="bg-black text-white min-h-screen flex justify-center items-center">
      <form onSubmit={onFormSubmitHandler} className="border-2 border-gray-600 rounded-lg p-10">
        <h1 className="text-xl mb-10">Edit Profile</h1>
        <div className="flex justify-around gap-5 mb-5">
          <div>
            {profile_picture && <img className="h-28 w-28 rounded-full" src={profile_picture} alt = { name } />}
            {!profile_picture && <i className="text-6xl bi bi-person-circle"></i>}
          </div>
          <div>
            <div>{username}</div>
            <div>{name}</div>
          </div>
          <div>
            <button className="bg-blue-500 hover:bg-blue-600 px-2 py-1 rounded">
              Change Photo
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-3 mb-10">
          <label htmlFor="bio">Bio</label>
          <textarea name="bio" id="bio" className="border-gray-700 border-2 rounded bg-black text-white">{bio}</textarea>
        </div>

        <div className="text-end">
          <button className="rounded-lg bg-blue-500 hover:bg-blue-600 px-14 py-3">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;
