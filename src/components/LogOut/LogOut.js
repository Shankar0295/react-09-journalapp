import React from "react";
import { FaSignOutAlt } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import "./LogOut.css";
import { IconContext } from 'react-icons';
import { auth } from '../../auth/firebase';
import { signOut } from 'firebase/auth';


const LogoutButton = () => {
  const user = JSON.parse(sessionStorage.getItem('firebase:authUser:AIzaSyCpsdXyfZw0YraJ5EdeD3kZkpHBk1Sqq5M:[DEFAULT]'))
  console.log(user, "user")
  const navigate = useNavigate();
  const handleLogout = (e) => {
    e.preventDefault();
    signOut(auth).then(() => {
      navigate("/")
    }).catch((error) => {
      console.log(error.message)
    });
  };

  return (
    <div>{(user !== null) &&
      <IconContext.Provider value={{ color: '#000' }}>
        <Link className="link" to="/">
          <span className="user-details">Welcome, {user.email}</span>
          <button onClick={handleLogout}><FaSignOutAlt /></button>
        </Link>
      </IconContext.Provider>}
    </div>
  );
};

export default LogoutButton;
