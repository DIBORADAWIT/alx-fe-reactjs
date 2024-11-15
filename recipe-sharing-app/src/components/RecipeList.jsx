import useStore from "../useStore"; // Use the correct store import

const RecipeList = () => {
  const recipes = useStore((state) => state.recipes); // Fetch recipes from Zustand store

  return (
    <div>
      {recipes.length === 0 ? (
        <p>No recipes available. Add some recipes!</p>
      ) : (
        recipes.map((recipe) => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList; // Ensure the component is exported
