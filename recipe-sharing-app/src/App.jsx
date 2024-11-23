import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import RecipeList from "./components/RecipeList";
import AddRecipeForm from "./components/AddRecipeForm";
import SearchBar from "./components/SearchBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import useStore from "./components/useStore";
function App() {
  const [count, setCount] = useState(0);
  const { increment, decrement, reset } = useStore();
  return (
    <>
      <div className="App">
        <h1>Recipe Sharing Application</h1>
        <SearchBar />
        <AddRecipeForm />
        <RecipeList />
        <Route path="/about" element={<></>} />
      </div>
    </>
  );
}

export default App;
