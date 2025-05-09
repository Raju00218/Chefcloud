import React from "react";
import IngredientsList from "./IngredientsList";
import Cloudrecipe from "./Apirecipe";
// import getRecipeFromChefClaude from './ai'
import { getRecipeMistral } from "./ai";



function Addingredients() {
  const [ingredient, setIngredients] = React.useState(['Chicken', 'Chicken', 'Chicken','Chicken'])
  const [recipeShown, setRecipeShown]= React.useState("")  

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
    // setRecipeShown(recipeShown => !recipeShown)
    handleRecipe()

  }
 const handleRecipe = async ()=>{
   const result = await getRecipeMistral(ingredient)
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
        ref={recipeSection}
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

