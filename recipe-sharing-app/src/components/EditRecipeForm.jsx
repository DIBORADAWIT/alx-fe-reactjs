import { useState } from "react";
import useStore from "../useStore";

function EditRecipeForm({ recipe }) {
  const [name, setName] = useState(recipe.name);
  const [ingredients, setIngredients] = useState(recipe.ingredients.join(", "));
  const updateRecipe = useStore((state) => state.updateRecipe);

  const handleUpdate = () => {
    updateRecipe(recipe.id, {
      name,
      ingredients: ingredients.split(",").map((item) => item.trim()),
    });
  };

  return (
    <div>
      <h3>Edit Recipe</h3>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
      />
      <button onClick={handleUpdate}>Save Changes</button>
    </div>
  );
}

export default EditRecipeForm;
