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
      <div>
        <div className="imgContainer">
          <img className="recipeImg" src={recipe.image_url} />
        </div>
        <h3>{recipe.recipe_name}</h3>
      </div>
      <button className="blue-btn" onClick={ButtonClicked}>See Recipe!</button>
    </div>
    </section>
  );
};

export default RecipeCard;
