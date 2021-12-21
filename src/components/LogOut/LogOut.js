import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./LogOut.css";
const LogoutButton = () => {
  const { logout } = useAuth0();
  return (
    <div className="logout-container">
      <button
        className="logout-btn"
        onClick={() =>
          logout({
            returnTo: window.location.origin + "/login",
          })
        }
      >
        Log Out
      </button>
    </div>
  );
};

export default LogoutButton;
