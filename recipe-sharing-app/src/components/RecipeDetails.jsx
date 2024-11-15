import { useParams } from "react-router-dom";
import useStore from "../useStore";
import EditRecipeForm from "./EditRecipeForm";
import DeleteRecipeButton from "./DeleteRecipeButton";

function RecipeDetails() {
  const { recipeId } = useParams();
  const recipe = useStore((state) =>
    state.recipes.find((recipe) => recipe.id === parseInt(recipeId))
  );

  if (!recipe) {
    return <p>Recipe not found!</p>;
  }

  return (
    <div>
      <h1>{recipe.name}</h1>
      <p>Ingredients: {recipe.ingredients.join(", ")}</p>
      <EditRecipeForm recipe={recipe} />
      <DeleteRecipeButton recipeId={recipe.id} />
    </div>
  );
}

export default RecipeDetails;
