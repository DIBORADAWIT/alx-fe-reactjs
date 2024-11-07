const UserProfile = (props) => {
  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "15px",
        margin: "15px",
        borderRadius: "8px",
        backgroundColor: "#f9f9f9",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h2 style={{ color: "blue", fontSize: "24px", marginBottom: "10px" }}>
        {props.name}
      </h2>
      <p style={{ fontSize: "18px", color: "#333" }}>
        Age:{" "}
        <span style={{ fontWeight: "bold", color: "#555" }}>{props.age}</span>
      </p>
      <p style={{ fontSize: "16px", color: "#555", marginTop: "8px" }}>
        {props.bio}
      </p>
    </div>
  );
};

export default UserProfile;
