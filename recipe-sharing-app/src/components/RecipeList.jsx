import { useRecipeStore } from "./recipeStore";
import DeleteRecipeButton from "./DeleteRecipeButton";
import { Link } from "react-router-dom";

export default function RecipeList() {
  
  const recipes = useRecipeStore(state => state.recipes)
  const recipeContainer = {
    border: '1px solid white',
    borderRadius: '10px',
    padding: '1rem',
    marginTop: '1rem',
    width: '650px',
    fontSize: '1rem'
  }

  return (
    <div>
      {recipes.map(recipe => (
        <div style={recipeContainer} key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
          <DeleteRecipeButton recipeId={recipe.id} />
          <Link to={`/edit/${recipe.id}`}><button>Edit recipe</button></Link>
        </div>
      ))}
    </div>
  )
}