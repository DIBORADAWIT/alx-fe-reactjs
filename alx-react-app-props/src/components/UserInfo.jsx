import UserDetails from "./UserDetails";

function UserInfo({ userData }) {
  return <UserDetails userData={userData} />;
}

const userData = useContext(UserContext);
return (
  <div>
    <h2>User Info</h2>
    <p>Name: {userData.name}</p>
    <p>Email: {userData.email}</p>
  </div>
);

export default UserInfo;
