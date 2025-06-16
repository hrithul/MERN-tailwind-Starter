import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../features/auth/authSlice";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.auth);

  const onLogoutClick = e => {
    e.preventDefault();
    dispatch(logoutUser());
  };

  const userName = user && user.name ? user.name.split(" ")[0] : "";

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h4 className="text-3xl font-bold mb-4">
          <b>Hey there,</b> {userName}
        </h4>
        <p className="text-gray-600 text-lg">
          You are logged into a full-stack{" "}
          <span className="font-mono bg-gray-200 px-2 py-1 rounded">MERN</span> app 👏
        </p>
        <button
          onClick={onLogoutClick}
          className="mt-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full max-w-xs"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;