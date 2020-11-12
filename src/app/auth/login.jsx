import React from "react";
import Loginform from "./components/loginForm";
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
        <Loginform />
      </div>
    </div>
  );
};

export default index;
