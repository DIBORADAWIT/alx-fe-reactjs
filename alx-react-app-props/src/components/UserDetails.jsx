import React, { useContext } from "react";
import UserContext from "../UserContext";

const UserDetails = () => {
  const userData = useContext(UserContext);

  return (
    <div>
      <h2>User Details</h2>
      <p>Name: {userData.name}</p>
      <p>Age: {userData.age}</p>
      <p>Bio: {userData.bio}</p>
    </div>
  );
};

export default UserDetails;
