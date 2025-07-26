import { useRecipeStore } from "./recipeStore";
import EditRecipeForm from "./EditRecipeForm";
import { useParams } from "react-router-dom";

export default function RecipeDetails() {

  const {id} = useParams()
  const recipeId = Number(id)
  const recipe = useRecipeStore(state => 
    state.recipes.find(r => r.id === recipeId)
  )



  return (
      <div key={recipe.id}>
        <em>{recipe.id}</em>
        <h3>{recipe.title}</h3>
        <p>{recipe.description}</p>
        <EditRecipeForm recipeId={recipeId} />
      </div>
  )
}