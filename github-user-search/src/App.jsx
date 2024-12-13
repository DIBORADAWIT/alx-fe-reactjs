import React, { useState } from "react";
import "./App.css";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [userData, setUserData] = useState(null);

  // Function to handle search submission (You will later integrate the API)
  const handleSearch = () => {
    console.log("Searching for:", searchQuery);
  };

  return (
    <div className="App">
      <h1>GitHub User Search</h1>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Enter GitHub username"
      />
      <button onClick={handleSearch}>Search</button>

      <div>
        {userData && (
          <div>
            <h2>{userData.name}</h2>
            <p>{userData.bio}</p>
            <a
              href={userData.html_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Profile
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
