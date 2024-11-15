import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import useRecipeStore from "../recipeStore";  
const EditRecipeForm = () => {
  const { recipeId } = useParams(); 
  const history = useHistory(); 

  const recipe = useRecipeStore((state) =>
    state.recipes.find((recipe) => recipe.id === parseInt(recipeId))
  );

  if (!recipe) {
    history.push("/"); 
    return <p>Recipe not found!</p>;
  }

  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);

  const updateRecipe = useRecipeStore((state) => state.updateRecipe);

  const handleSubmit = (event) => {
    event.preventDefault(); 

    updateRecipe(recipe.id, { title, description });

    history.push(`/recipe/${recipe.id}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Recipe</h2>

      <div>
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>

      <div>
        <label>Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>

      <button type="submit">Update Recipe</button>
    </form>
  );
};

export default EditRecipeForm;
