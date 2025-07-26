import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useRecipeStore = create(
  persist(
    (set) => ({
      recipes: [],
      addRecipe: (newRecipe) =>
        set((state) => ({
          recipes: [...state.recipes, newRecipe],
        })),
      deleteRecipe: (id) =>
        set((state) => ({
          recipes: state.recipes.filter((recipe) => recipe.id !== id),
        })),
      updateRecipe: (id, updatedData) =>
        set((state) => ({
          recipes: state.recipes.map((recipe) =>
            recipe.id === id ? { ...recipe, ...updatedData } : recipe
          ),
        })),
    }),
    {
      name: 'recipe-storage', // key used in localStorage
    }
  )
);
