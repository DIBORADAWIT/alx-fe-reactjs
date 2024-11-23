import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import RecipeList from "./components/RecipeList";
import AddRecipeForm from "./components/AddRecipeForm";
import SearchBar from "./components/SearchBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import useStore from "./components/useStore";
import RecipeDetails from "./components/RecipeDetails";
import FavoritesList from "./components/FavoritesList";
import RecommendationsList from "./components/RecommendationsList";
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
        <Routes>
          <Route path="/" element={<></>} />
          <Route path="/recipes" element={<RecipeDetails />} />
        </Routes>
      </div>
      <FavoritesList />
      <RecommendationsList />
    </>
  );
}

export default App;
