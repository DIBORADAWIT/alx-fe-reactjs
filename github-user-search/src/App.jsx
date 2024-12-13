import React, { useState } from "react";
import "./App.css";
import Search from "./components/Search";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [userData, setUserData] = useState(null);

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
            <Search />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
