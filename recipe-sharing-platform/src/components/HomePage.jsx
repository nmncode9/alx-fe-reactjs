import React, {useState, useEffect} from "react"

export default function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch('/data.json')
      .then(res => res.json())
      .then(data => setRecipes(data))
      .catch(error => console.log(`Failed to load recipes: ${error.message}`))
  }, [])


  return (
    <main className="mx-auto my-32 sm:w-[52rem] w-[25rem] space-y-4">
      {recipes.length === 0 && <p>Loading...</p>}
      <h2 className="text-3xl mb-8" >Recipes List</h2>
      {recipes.map(recipe => (
        <article key={recipe.id} className="border-2 shadow-md/33 shadow-gray-200 border-gray-400 rounded-md grid grid-cols-1 sm:grid-cols-[5fr_1fr] sm:w-[52rem] w-[25rem] overflow-hidden">
          <div className="copy p-4">
            <h2 className="text-xl mb-2">{recipe.title}</h2>
            <p className="text-base">{recipe.summary}</p>
          </div>
          <img className="justify-self-center sm:justify-self-auto w-full sm:w-auto" src={recipe.image}/>
        </article>
      ))}
    </main>
  )
}
