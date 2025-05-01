import React from "react";
import IngredientsList from "./IngredientsList";
import Cloudrecipe from "./Apirecipe";
// import getRecipeFromChefClaude from './ai'
import { getRecipeMistral } from "./ai";



function Addingredients() {
  const [ingredient, setIngredients] = React.useState([])
  const [recipeShown, setRecipeShown]= React.useState("")  
  function AddItem(formData){   
    const item = formData.get('listItems')?.trim();
    setIngredients(prevItem => [...prevItem, item])

  }
  function ShowRecipe(){
    // setRecipeShown(recipeShown => !recipeShown)
    handleRecipe()

  }
 const handleRecipe = async ()=>{
   const result = await getRecipeMistral(ingredient)
  console.log(result)
  setRecipeShown(result)

 }

  return (
    <>
    <form action={AddItem} className="ingredient-form">
      <input className="input-box" 
      type="text" 
      name="listItems"
      placeholder="Add Ingredients"
      />
        <button className="add-ingredients-btn" type="submit">+Add ingredients</button>
    </form>
    <IngredientsList
        ShowRecipe={ShowRecipe}
        ingredient ={ingredient}
    />
      <Cloudrecipe 
      recipeShown={recipeShown}

      />
    </>
  );
}

export default Addingredients;

