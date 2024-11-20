import React, { useState } from "react";
import useRecipeStore from "./recipeStore";

const UpdateRecipeForm = ({ id, currentTitle, currentDescription }) => {
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);
  const [title, setTitle] = useState(currentTitle);
  const [description, setDescription] = useState(currentDescription);

  const handleUpdate = (e) => {
    e.preventDefault();
    if (!title || !description) {
      alert("Both fields must be filled out.");
      return;
    }
    updateRecipe(id, { title, description });
    alert("Recipe updated successfully!");
  };

  return (
    <form onSubmit={handleUpdate}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Update Title"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Update Description"
      />
      <button type="submit">Update</button>
    </form>
  );
};

export default UpdateRecipeForm;
