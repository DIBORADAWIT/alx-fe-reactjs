import React from "react";
import { Outlet, Link } from "react-router-dom";

["Routes", "Route", "ProfileDetails", "ProfileSettings"];

const Profile = () => {
  return (
    <div>
      <h1>Profile</h1>
      <nav>
        <ul>
          <li>
            <Link to="details">Profile Details</Link>
          </li>
          <li>
            <Link to="settings">Profile Settings</Link>
          </li>
        </ul>
      </nav>
      <hr />
      {/* Render the nested route components here */}
      <Outlet />
    </div>
  );
};

export default Profile;
