import { useQuery } from "@tanstack/react-query";
import React from "react";
import { backendServerURL } from "../../utils/util";
const EditProfile = () => {
  const { data, error, isPending } = useQuery({
    queryKey: ["profile"],
    queryFn: async () => {
      const res = await fetch(backendServerURL + "user/get/grv.thapa");
      const result = await res.json();
      return result;
    },
    staleTime: Infinity,
    gcTime: Infinity,
  });
  if (isPending) {
    return "Loading...";
  }
  if (error) {
    return "An error occurred - " + error.message;
  }
  const {userid, username, name, profile_picture, bio, country_code, phone, email} = data;
  return (
    <div className="bg-black text-white min-h-screen flex justify-center items-center">
      <div className="border-2 border-gray-600 rounded-lg p-10">
        <h1 className="text-xl mb-10">Edit Profile</h1>
        <div className="flex justify-around gap-5 mb-5">
          <div>
            {profile_picture}
            <i className="text-6xl bi bi-person-circle"></i>
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
          <label>Bio</label>
          <textarea className="border-gray-700 border-2 rounded bg-black text-white">{bio}</textarea>
        </div>

        <div className="text-end">
          <button className="rounded-lg bg-blue-500 hover:bg-blue-600 px-14 py-3">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
