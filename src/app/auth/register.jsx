import React from "react";
import RegisterForm from "./components/registerForm";
import Sidebar from "./components/leftsidebar";
import Logo from "../common/assets/svg/MTA.svg";

const index = () => {
  return (
    <div id="auth-wrapper">
      <Sidebar />
      <div id="loginFormDiv">
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
        <RegisterForm />
      </div>
    </div>
  );
};

export default index;
