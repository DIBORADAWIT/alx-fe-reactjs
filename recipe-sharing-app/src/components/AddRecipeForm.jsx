import { useState } from "react";
import useStore from "../useStore"; // Use the correct store import

const AddRecipeForm = () => {
  const addRecipe = useStore((state) => state.addRecipe); // Add recipe action
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!title || !description) return; // Basic validation
    addRecipe({ id: Date.now(), title, description }); // Add a new recipe
    setTitle("");
    setDescription(""); // Reset form inputs
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        required
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        required
      />
      <button type="submit">Add Recipe</button>
    </form>
  );
};

export default AddRecipeForm; // Ensure the component is exported
