import React from "react";
import useRecipeStore from "./recipeStore";
import UpdateRecipeForm from "./UpdateRecipeForm";

const RecipeList = () => {
  const { recipes, deleteRecipe } = useRecipeStore();

  return (
    <div>
      {recipes.map((recipe) => (
        <div
          key={recipe.id}
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            marginBottom: "10px",
          }}
        >
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
          <button onClick={() => deleteRecipe(recipe.id)}>Delete</button>
          <UpdateRecipeForm
            id={recipe.id}
            currentTitle={recipe.title}
            currentDescription={recipe.description}
          />
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
