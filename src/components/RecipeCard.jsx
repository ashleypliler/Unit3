import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import cake from "../assets/cake.jpg"
import steak from "../assets/steak.jpg"
import smoothie from "../assets/smoothie.jpg"

const RecipeCard = ({recipe}) => {

    const ButtonClicked = () => {
        useNavigate(`/recipe/${recipe.recipe_id}`);
    };

  return (
    <section>
      <div className="recipeCard">
        <img className="cakePic" src={cake}></img>
        <h1 className="recipeCake">German Chocolate Cake</h1>
        <button className="cakeBtn">See Recipe</button>
      </div>
      <div className="recipeCard2">
        <img className="steakPic" src={steak}></img>
        <h1 className="recipeSteak">Rosemary Garlic Steak</h1>
        <button className="steakBtn">See Recipe</button>
      </div>
      <div className="recipeCard3">
        <img className="smoothiePic" src={smoothie}></img>
        <h1 className="recipeSmoothie">Rasspberry smoothie</h1>
        <button className="smoothieBtn">See Recipe</button>
      </div>
    </section>
  );
};

export default RecipeCard;
