import React, { useState } from 'react';

const AddRecipeForm = () => {
  const [recipeName, setRecipeName] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 max-w-md mx-auto bg-white shadow-lg rounded-lg md:w-1/2 font-sans text-gray-700"
    >
      <h2 className="text-2xl font-bold mb-4">Add Recipe</h2>

      <div className="mb-4">
        <label htmlFor="recipeName" className="block text-sm font-medium mb-2">
          Recipe Name
        </label>
        <input
          id="recipeName"
          type="text"
          value={recipeName}
          onChange={(e) => setRecipeName(e.target.value)}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter recipe name"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="ingredients" className="block text-sm font-medium mb-2">
          Ingredients
        </label>
        <textarea
          id="ingredients"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="List the ingredients"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="instructions" className="block text-sm font-medium mb-2">
          Instructions
        </label>
        <textarea
          id="instructions"
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Write the instructions"
        />
      </div>

      <button
        type="submit"
        className="w-full py-2 px-4 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Submit
      </button>
    </form>
  );
};

export default AddRecipeForm;
