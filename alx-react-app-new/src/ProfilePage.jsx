import React, { useContext } from "react";
import UserContext from "UserContext";
const ProfilePage = () => {
  const userData = useContext(UserContext);

  return (
    <div>
      <h2>Profile Page</h2>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
};

export default ProfilePage;
