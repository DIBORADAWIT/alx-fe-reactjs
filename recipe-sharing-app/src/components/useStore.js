import { create } from "zustand";

const useStore = create((set) => ({
  recipes: [],

  addRecipe: (recipe) =>
    set((state) => ({
      recipes: [...state.recipes, recipe],
    })),

  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
    })),

  updateRecipe: (id, updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === id ? { ...recipe, ...updatedRecipe } : recipe
      ),
    })),

  getRecommendations: () => {
    const { recipes, favorites } = get();
    return recipes.filter((recipe) =>
      favorites.some((fav) => fav.cuisine === recipe.cuisine)
    );
  },
}));

export default useStore;
