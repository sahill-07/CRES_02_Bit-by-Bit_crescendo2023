import React from "react";
import userIcon from '../../../assets/user_icon.png';
import accountSettingsIcon from '../../../assets/account-settings.png';
import userIcon2 from "../../../assets/user_icon2.png";
import logoutIcon from "../../../assets/logout.png";
import { Link } from 'react-router-dom';
import { getAuth } from "firebase/auth";
import "../../../style/AccountDropDown.css";

export const AccountDropDown = () => {
    const logout = ()=>{
        getAuth().signOut();
      }
  return (
    <>
       <div className="account-drop-down cursor-pointer">
        <img src={userIcon} alt="account-icon" className="account-icon h-10" />
        <ul className="dropdown-items absolute z-10 right-[20px] bg-white">
          <Link to="my-profile" className="dropdown-subitems p-4 flex flex-row">
            <img src={userIcon2} alt="userIcon" className="h-6" />
            <h3>&nbsp;My Profile</h3>
          </Link>{" "}
          <hr />
          <hr />
          <li onClick={logout} className="dropdown-subitems p-4 flex flex-row">
            <img src={logoutIcon} alt="logout-icon" className="h-6" />
            <h3>&nbsp;Log out</h3>
          </li>{" "}
          <hr />
        </ul>
      </div>
    </>
  )
}
