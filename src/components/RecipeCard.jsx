import React from "react";
import { Navigate, useNavigate } from "react-router-dom";


const RecipeCard = ({recipe}) => {

    const ButtonClicked = () => {
        useNavigate(`/recipe/${recipe.recipe_id}`);
    };

  return (
    <section>
      <div className="recipeCard">
      <div>
        <div className="imgContainer">
          <img className="recipeImg"  />
        </div>
        <h3></h3>
      </div>
      <button className="blue-btn" onClick={ButtonClicked}>See Recipe!</button>
    </div>
    </section>
  );
};

export default RecipeCard;
