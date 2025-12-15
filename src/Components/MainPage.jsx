import React from "react";
import IngredientsList from "./IngredientsList";
import Cloudrecipe from "./Apirecipe";
// import getRecipeFromChefClaude from './ai'
import { getRecipeMistral } from "./ai";
import { useState } from "react";



function Addingredients(props) {
  const [ingredient, setIngredients] = useState(["raju" ,"apple","banana"]);
  const [recipeShown, setRecipeShown]= useState("")  
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
  function removeItem(index) {
    const updatedIngredients = ingredient.filter((_, i) => i !== index);
    setIngredients(updatedIngredients);
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
        removeItem={removeItem}
    />
      <Cloudrecipe 
      recipeShown={recipeShown}

      />
    </>
  );
}

export default Addingredients;

