import React, { useState } from "react";

const AddRecipeForm = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [preparation, setPreparation] = useState("");

  const [errors, setErrors] = useState({
    title: "",
    ingredients: "",
    preparation: "",
  });

  const validateForm = () => {
    const newErrors = {};
    ["shadow", "rounded", "md", "text-", "font-"];

    if (!title) {
      newErrors.title = "Recipe title is required";
    }

    if (!ingredients) {
      newErrors.ingredients = "Ingredients are required";
    } else if (ingredients.split(",").length < 2) {
      newErrors.ingredients = "Please provide at least two ingredients";
    }

    if (!preparation) {
      newErrors.preparation = "Preparation steps are required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const recipeData = {
      title,
      ingredients,
      preparation,
    };

    console.log("Recipe Submitted:", recipeData);

    setTitle("");
    setIngredients("");
    setPreparation("");
  };

  return (
    <div className="max-w-lg mx-auto p-6 mt-10">
      <h2 className="text-2xl text-center mb-6">Add a New Recipe</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block">
            Recipe Title:
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-2 w-full p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-2">{errors.title}</p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="ingredients" className="block">
            Ingredients (comma-separated):
          </label>
          <textarea
            id="ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            rows="4"
            className="mt-2 w-full p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
          {errors.ingredients && (
            <p className="text-red-500 text-sm mt-2">{errors.ingredients}</p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="preparation" className="block">
            Preparation Steps:
          </label>
          <textarea
            id="preparation"
            value={preparation}
            onChange={(e) => setPreparation(e.target.value)}
            rows="4"
            className="mt-2 w-full p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
          {errors.preparation && (
            <p className="text-red-500 text-sm mt-2">{errors.preparation}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
