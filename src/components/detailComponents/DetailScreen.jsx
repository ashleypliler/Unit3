import React, {useEffect, useState} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import salmon from "../../assets/salmon.jpg"
import DetailsImage from "./DetailImage";

const DetailScreen = () => {
  const {id} = useParams();
  const [recipe, setRecipe] = useState({});
  console.log(recipe)
  useEffect(() => {
    axios.get(`https://recipes.devmountain.com/recipes/${id}`).then((res) => {
      setRecipe(res.data);
      console.log(res.data);
    })
  }, []);

  return (
    <section>
      <DetailsImage image={recipe.image_url} title={recipe.recipe_name} />
      <div className="leftDiv">
        <h2 className="headers" id="recipeHeader">Recipe</h2>
        <h4 id="prep">Prep Time: {recipe.prep_time}</h4>
        <h4 id="cook">Cook Time: {recipe.cook_time}</h4>
        <h4 id="serve">Serves: {recipe.serves}</h4>
        <h2 className="headers" id="ingredientsHeader">Ingredients</h2>
        {recipe.ingredients && recipe.ingredients.map((ing, index) => {
          return <h4>{ing.quantity} {ing.ingredient}</h4>
        })}
       
      </div>
      <div className="rightDiv">
        <h1 className="headers" id="instructHeader">Instructions</h1>
        <p style={{ whiteSpace: "pre-wrap" }}>
        {recipe.instructions && JSON.parse(recipe.instructions)}
        </p>      
      </div>
    </section>
  );
};

export default DetailScreen;
