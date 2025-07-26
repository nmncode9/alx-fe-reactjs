import { useRecipeStore } from "./recipeStore";
import EditRecipeForm from "./EditRecipeForm";

export default function RecipeDetails({ recipeId }) {

  const recipe = useRecipeStore(state =>
      state.recipes.find(recipe => recipe.id === recipeId)
    );

    const recipeWrapper = {
      width: '650px',
      fontSize: '1rem'
    }

  return (
      <div key={recipe.id}>
        <em>{recipe.id}</em>
        <h3>{recipe.title}</h3>
        <p>{recipe.description}</p>
        <EditRecipeForm recipeId={recipeId} />
        <RecipeDeleteButton recipeId={recipeId} />
      </div>
  )
}