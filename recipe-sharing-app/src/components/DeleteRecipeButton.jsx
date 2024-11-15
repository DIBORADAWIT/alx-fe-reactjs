import useStore from "../useStore";

function DeleteRecipeButton({ recipeId }) {
  const deleteRecipe = useStore((state) => state.deleteRecipe);

  const handleDelete = () => {
    deleteRecipe(recipeId);
  };

  return <button onClick={handleDelete}>Delete Recipe</button>;
}

export default DeleteRecipeButton;
