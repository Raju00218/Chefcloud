import React from "react";
import IngredientsList from "./IngredientsList";
import Cloudrecipe from "./Apirecipe";
// import getRecipeFromChefClaude from './ai'
import { getRecipeMistral } from "./ai";
import { useState } from "react";



function Addingredients() {
  const [ingredient, setIngredients] = React.useState(["Spice mixt","Chicken breasts","Yogurt","Lemon juice","Garlic","Ginger","Cumin","Coriander","Turmeric","Paprika",])
  const [recipeShown, setRecipeShown]= React.useState("")  
  const [loading, setLoading]= useState(false)

  const recipeSection = React.useRef(null)

  React.useEffect(()=>{
    if(recipeShown !== "" && recipeSection.current !== null){
      recipeSection.current.scrollIntoView({behavior : "smooth"})
    }

  },[recipeShown])


  function AddItem(formData){   
    const item = formData.get('listItems')?.trim();
    setIngredients(prevItem => [...prevItem, item])

  }
  function ShowRecipe(){
    setLoading(true)
    handleRecipe()
  }
 const handleRecipe = async ()=>{
   const result = await getRecipeMistral(ingredient)
   setRecipeShown(result)
   setLoading(false)
 }

  return (
    <>
    <form action={AddItem} className="ingredient-form">
      <input className="input-box" 
      type="text" 
      name="listItems"
      placeholder="Enter Ingredients"
      required
      onInvalid={(e) => e.target.setCustomValidity("Please enter an ingredient!")}
      onInput={(e) => e.target.setCustomValidity("")}
      />
        <button className="add-ingredients-btn" type="submit">+ Add</button>
    </form>
    <IngredientsList
        ref={recipeSection}
        ShowRecipe={ShowRecipe}
        ingredient ={ingredient}
        loader={loading}
    />
      <Cloudrecipe 
      recipeShown={recipeShown}

      />
    </>
  );
}

export default Addingredients;

