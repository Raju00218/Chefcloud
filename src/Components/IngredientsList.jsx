
import Loader from "../Components/loader";
function IngredientsList(props) {
    const newIngredients = props.ingredient.map((ingredient, index) => (<li key={index}>{ingredient}</li>));
  return (
    <>
          {props.ingredient.length > 0 && <section className="ingredient-list">
              <div className="ingredient-div-2">
                  <h2>Ingredients on hand</h2>
                  <ul >
                      {newIngredients}
                  </ul>
              </div>
          </section>}
          {props.ingredient.length > 3 && <div ref={props.ref} className="get-recipe-div">
              <div>
                  <h3>Ready for recipe?</h3>
                  <p>Generate a recipe from your list of ingredients.</p>
              </div>
              <button onClick={props.ShowRecipe} >{props.loader ? <><Loader /> Loading...</> :"Get a recipe"}</button>
          </div>}
    </>
  );
}

export default IngredientsList;