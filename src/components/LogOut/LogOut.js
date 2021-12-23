import React from "react";
import { FaSignOutAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import "./LogOut.css";
import { IconContext } from 'react-icons';
// import { useUserAuth } from '../../context/UserAuthContext';
const LogoutButton = () => {
  // let { logOut } = useUserAuth();
  // console.log(user)
  // const navigate = useNavigate();
  // const handleLogout = async () => {
  //   try {
  //     await logOut();
  //     navigate("/");
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };
  return (
    <div>
      <IconContext.Provider value={{ color: '#000' }}>
        <Link className="link" to="/"><span className="user-details">Welcome, Shankar</span><button><FaSignOutAlt /></button></Link>
      </IconContext.Provider>
    </div>
  );
};

export default LogoutButton;
