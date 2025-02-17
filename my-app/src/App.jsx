import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import SignIn from "./pages/signin/SignIn";
import SignUp from "./pages/signup/SignUp";
import { useSelector } from "react-redux";
import Home from "./pages/Home/Home";

 export default function App() {
  const { user, isAutheticated } = useSelector((state) => state.auth);
  const { currentUser } = useSelector((state) => state.auth);

  console.log(user, "user from store");
  console.log(isAutheticated);
  useEffect(() => {
    localStorage.getItem("user");
  });

  return (
    <div className="max-w-7xl mx-auto h-screen">
      <Routes>
        {isAutheticated ? (
          <Route path="/" element={<Home currentUser={currentUser} />} />
        ) : (
          <Route path="/" element={<SignIn />} />
        )}

        <Route path="/signup" element={<SignUp />} />

      </Routes>
    </div>
  );
}

