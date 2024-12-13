import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import apiService from "./services/apiService";

function App() {
  const [count, setCount] = useState(0);
  const [apiData, setApiData] = useState(null); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await apiService();
        setApiData(data);
      } catch (error) {
        console.error("Error fetching API data", error);
      }
    };
    
    fetchData();
  }, []); 
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount(count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      
      <Header />
      <Footer />
      <Home />
      <About />

      <div>
        {apiData ? (
          <pre>{JSON.stringify(apiData, null, 2)}</pre>
        ) : (
          <p>Loading API data...</p>
        )}
      </div>
    </>
  );
}

export default App;
