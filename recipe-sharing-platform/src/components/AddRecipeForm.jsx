import { useState } from "react";
import RecipeDetail from "./RecipeDetail";

export default function AddRecipeForm() {

  const [newRecipe, setNewRecipe] = useState({
    "id": Date.now(),
    "title": "",
    "summary": "",
    "image": "",
    "ingredients": "",
    "preparation": ""
  })

  function ingredientMinCount(newRecipe){
    if (newRecipe.ingredients) {
      const ingredientList = newRecipe.ingredients.split(" ");
      if (ingredientList.length >= 2) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }

    
    
  }

  function handleSubmit(e) {
    e.preventDefault()

    if (!newRecipe.title.trim() || !newRecipe.ingredients.trim() || !newRecipe.preparation.trim()) {
      alert("Missing fields");
    } else if (!ingredientMinCount(newRecipe)) {
      alert("Recipe must have at least 2 ingredients")
    } else {
      alert("Submit successful!")
    }
  }


  return (
    <main className="m-36 w-[80%] sm:max-w-[750px] sm:mx-auto">
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <input
        className="border-gray-400/68 focus:border-gray-700/68 focus:shadow-md border-2 rounded-md p-4 outline-none mb-2 "
        type="text"
        name="title"
        placeholder="Enter a recipe title"
        value={newRecipe.title}
        onChange={(e) => setNewRecipe(prev =>({
          ...prev,
          [e.target.name]: e.target.value
        }))} />

        <textarea 
        className="border-gray-400/68 focus:border-gray-700/68 focus:shadow-md border-2 rounded-md p-4 outline-none mb-2 "
        name="ingredients" 
        placeholder="Enter the ingredients"
        value={newRecipe.ingredients}
        onChange={(e) => setNewRecipe(prev =>({
          ...prev,
          [e.target.name]: e.target.value
        }))}></textarea>
        <textarea 
        className="border-gray-400/68 focus:border-gray-700/68 focus:shadow-md border-2 rounded-md p-4 outline-none mb-2 "
        name="preparation" 
        placeholder="Enter the preparation instructions"
        value={newRecipe.preparation}
        onChange={(e) => setNewRecipe(prev =>({
          ...prev,
          [e.target.name]: e.target.value
        }))}></textarea>
        
        <button className="self-start mt-4 rounded-md border-2 border-gray-400/68 hover:shadow-md/45 hover:shadow-gray-200 px-4 py-2">Submit</button>

      </form>
    </main>
  )

}