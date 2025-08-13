import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

export default function RecipeDetail() {

  const {id} = useParams();
  const recipeId = Number(id);
  const [recipe, setRecipe] = useState({})

  useEffect(() => {
      fetch('/data.json')
        .then(res => {
          console.log("Raw response:", res);
          return res.json(); // returns a promise for parsed JSON
        })
        .then(data => {
          console.log("Parsed JSON:", data);
          const filtered = data.find(recipe => recipe.id === recipeId);
          setRecipe(filtered)
          console.log("Filtered recipes:", filtered);
          return filtered;
        })
        .then(filtered => {
          console.log("Value passed to this .then():", filtered);
        })
        .catch(err => console.error("Error:", err));
    }, [])
  

    return (
      <article key={recipe.id} className="p-4 mx-4 sm:mx-auto sm:max-w-[950px] sm:w-[calc(100%-16rem)] my-32 border-2 hover:shadow-md/45 hover:shadow-gray-400 shadow-md/33 shadow-gray-200 border-gray-400/68 rounded-md">
        <div className="copy mb-2">
          <h2 className="text-xl mb-2">{recipe.title}</h2>
          <p className="text-base">{recipe.summary}</p>
        </div>
        <h3 className="mb-2 font-semibold">ingredients:</h3>
        <ul className="mb-2">
          <li>Lorem</li>
          <li>Ipsum</li>
          <li>Dolor</li>
          <li>Sit</li>
        </ul>
        <h3 className="mb-2 font-semibold">instructions</h3>
        <p className="mb-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt?</p>
        {/* <p className="grid-cols-2 grid-cols-3"></p> */}
        <img className="w-full sm:w-auto sm:mx-auto" src={recipe.image}/>
      </article>
    )

}