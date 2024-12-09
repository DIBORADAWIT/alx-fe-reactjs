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
    <div className="add-recipe-form">
      <h2>Add a New Recipe</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Recipe Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          {errors.title && <p className="error">{errors.title}</p>}
        </div>

        <div>
          <label htmlFor="ingredients">Ingredients (comma-separated):</label>
          <textarea
            id="ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            rows="4"
            required
          />
          {errors.ingredients && <p className="error">{errors.ingredients}</p>}
        </div>

        <div>
          <label htmlFor="preparation">Preparation Steps:</label>
          <textarea
            id="preparation"
            value={preparation}
            onChange={(e) => setPreparation(e.target.value)}
            rows="4"
            required
          />
          {errors.preparation && <p className="error">{errors.preparation}</p>}
        </div>

        <button type="submit">Submit Recipe</button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
