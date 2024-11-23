import useRecipeStore from "./recipeStore";

const RecommendationsList = () => {
  const recommendations = useRecipeStore((state) => state.recommendations);

  return (
    <div className="recommendations">
      <h2>Recommended Recipes</h2>
      {recommendations.length > 0 ? (
        <div className="recipe-grid">
          {recommendations.map((recipe) => (
            <div key={recipe.id} className="recipe-card">
              <h3>{recipe.name}</h3>
            </div>
          ))}
        </div>
      ) : (
        <p>No recommendations available. Add more favorites!</p>
      )}
    </div>
  );
};

export default RecommendationsList;
