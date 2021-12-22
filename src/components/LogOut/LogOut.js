import React from "react";
import { FaSignOutAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import "./LogOut.css";
import { IconContext } from 'react-icons';

const LogoutButton = () => {
  return (
    <div>
      <IconContext.Provider value={{ color: '#000' }}>
        <Link to="/"><FaSignOutAlt /></Link>
      </IconContext.Provider>
    </div>
  );
};

export default LogoutButton;
