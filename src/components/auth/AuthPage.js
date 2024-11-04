import React, { useState } from "react";
import Input from "../../ui/Input";
import { useNavigate } from "react-router-dom";
import { backendServerURL } from "../../utils/util";
import { userSliceActions } from "../../store/userSlice";
import { useDispatch } from "react-redux";

const AuthPage = () => {
  const [signInMode, setSignInMode] = useState(true);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userAction = async (user) => {
    // console.log("creating user...");
    // console.log(user);
    const urlEndpoint = signInMode ? "user/login" : "user/create";
    const res = await fetch(backendServerURL + urlEndpoint, {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!res.ok) {
      const resData = await res.json();
      setError(resData);
    } else {
      const resData = await res.json();
      dispatch(
        userSliceActions.addUserSlice({
          userID: resData.USER_ID,
          username: resData.USERNAME,
          name: resData.NAME,
          profile_picture: resData.PROFILE_PICTURE,
        })
      );
      signInMode ? navigate('/') : navigate("/signup/editProfile");
    }
  };
  const onFormSubmitHandler = (e) => {
    e.preventDefault();
    setError(null);
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    userAction(data);
  };
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center bg-black text-white">
      <div className="w-full md:w-1/2 lg:w-1/3 flex flex-col p-10 rounded-lg border-2 border-gray-600">
        <div className="italic text-center text-3xl mb-10">Instagram</div>
        <form onSubmit={onFormSubmitHandler}>
          {signInMode && (
            <>
              <Input
                type={"text"}
                id={"identifier"}
                placeholder={"Phone number, username or email address"}
              />
              <Input
                type={"password"}
                id={"password"}
                placeholder={"Password"}
              />
            </>
          )}
          {!signInMode && (
            <>
              <Input
                type={"text"}
                id={"identifier"}
                placeholder={"Phone number or email address"}
              />
              <Input
                type={"password"}
                id={"password"}
                placeholder={"Password"}
              />
              <Input type={"text"} id={"name"} placeholder={"Full Name"} />
              <Input type={"text"} id={"username"} placeholder={"Username"} />
            </>
          )}
          {error && (
            <div className="bg-red-500 text-white text-center p-1 rounded-lg">
              {error}
            </div>
          )}
          <button className="bg-blue-400 mt-3 py-1 rounded hover:bg-blue-600 w-full">
            {signInMode ? "Log In" : "Sign Up"}
          </button>
        </form>
      </div>
      <div className="w-full flex gap-2 md:w-1/2 lg:w-1/3 px-10 py-5 border-2 border-gray-600 rounded-lg mt-5">
        {signInMode ? (
          <div>Don't have an account?</div>
        ) : (
          <div>Have an account?</div>
        )}
        <div
          onClick={() => setSignInMode((prev) => !prev)}
          className="hover:cursor-pointer text-blue-400"
        >
          {signInMode ? "Sign Up." : "Log In."}
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
