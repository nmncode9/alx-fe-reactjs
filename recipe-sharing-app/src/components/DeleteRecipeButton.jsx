import { useRecipeStore } from "./recipeStore";

export default function DeleteRecipeButton({recipeId}) {

  const deleteRecipe = useRecipeStore(state => state.deleteRecipe)
  const btnStyle = {
    color: 'white',
    backgroundColor: 'orangered'
  }

  return (
    <button style = {btnStyle} onClick={() => deleteRecipe(recipeId)} >Delete</button>
  )
}