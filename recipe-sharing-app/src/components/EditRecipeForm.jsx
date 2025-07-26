import { useRecipeStore } from "./recipeStore";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function EditRecipeForm() {

  const { id } = useParams()
  const recipeId = Number(id)
  const recipe = useRecipeStore(state => 
    state.recipes.find(r => r.id === recipeId)
  )

  const titleInput = {
    width: '650px',
    height: '56px',
    fontSize: '1.5rem'
  }
  const DescInput = {
    width: '650px',
    height: '400px',
    fontSize: '1.5rem'
  }

  const updateRecipe = useRecipeStore(state => state.updateRecipe)
  const [formData, setFormData] = useState({
    title: "",
    description: ""
  })

  useEffect(() => { /* Populate the field with the existing recipe if it exists */
    if (recipe) {
      setFormData({ title: recipe.title, description: recipe.description });
    }
  }, [recipe]);

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    updateRecipe(recipeId, formData)
    alert('Saved!');
  }

  const { title, description } = formData;

  return (
    <form
    onSubmit={handleSubmit}
    key={recipeId}>
      <input
        style={titleInput}
        type="text"
        name="title"
        value={title}
        onChange={handleChange}
      /><br/><br/>
      <input
        style={DescInput}
        type="text"
        name="description"
        value={description}
        onChange={handleChange}
      /><br/><br/>
      <button type="submit">Save</button>
    </form>
  )


}