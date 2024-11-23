import { useParams } from "react-router-dom";
import useRecipeStore from "./recipeStore";

function RecipeDetails() {
  const { recipeId } = useParams();
  const recipe = useRecipeStore((state) =>
    state.recipes.find((recipe) => recipe.id === parseInt(recipeId))
  );

  if (!recipe) {
    return <p>Recipe not found!</p>;
  }

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      {/* You can render the Edit and Delete buttons here */}
    </div>
  );
}

export default RecipeDetails;
