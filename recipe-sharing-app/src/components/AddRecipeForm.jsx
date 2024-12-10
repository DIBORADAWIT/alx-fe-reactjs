import React, { useState } from 'react';

const AddRecipeForm = () => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [preparationSteps, setPreparationSteps] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length === 0) {
      const newRecipe = { title, ingredients, preparationSteps };
      console.log("Recipe Submitted", newRecipe);
      // Here, you can handle the recipe submission (e.g., send it to the server)
    } else {
      setErrors(validationErrors);
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!title) errors.title = "Title is required.";
    if (!ingredients) errors.ingredients = "Ingredients are required.";
    if (ingredients.split('\n').length < 2) errors.ingredients = "Please add at least two ingredients.";
    if (!preparationSteps) errors.preparationSteps = "Preparation steps are required.";
    return errors;
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-semibold mb-4">Add a New Recipe</h2>
      
      {/* Title */}
      <div className="mb-4">
        <label htmlFor="title" className="block text-sm font-medium text-gray-700">Recipe Title</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full mt-2 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
        />
        {errors.title && <p className="text-red-500 text-xs mt-1">{errors.title}</p>}
      </div>

      {/* Ingredients */}
      <div className="mb-4">
        <label htmlFor="ingredients" className="block text-sm font-medium text-gray-700">Ingredients</label>
        <textarea
          id="ingredients"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          rows="4"
          className="w-full mt-2 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
        />
        {errors.ingredients && <p className="text-red-500 text-xs mt-1">{errors.ingredients}</p>}
      </div>

      {/* Preparation Steps */}
      <div className="mb-4">
        <label htmlFor="preparationSteps" className="block text-sm font-medium text-gray-700">Preparation Steps</label>
        <textarea
          id="preparationSteps"
          value={preparationSteps}
          onChange={(e) => setPreparationSteps(e.target.value)}
          rows="6"
          className="w-full mt-2 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
        />
        {errors.preparationSteps && <p className="text-red-500 text-xs mt-1">{errors.preparationSteps}</p>}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
      >
        Submit Recipe
      </button>
    </form>
  );
};

export default AddRecipeForm;
