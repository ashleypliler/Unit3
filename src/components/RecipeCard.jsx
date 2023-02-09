import React from "react";
import { useNavigate } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
  const ButtonClicked = () => {
    useNavigate(`/recipe/${recipe.recipe_id}`);
  };

  return (
    <div className="recipe_card">
    <div>
      <div className="recipe_img_container">
        <img src={recipe.image_url} />
      </div>
      <h3>{recipe.recipe_name}</h3>
    </div>
    <button className="blue-btn" onClick={ButtonClicked}>See Recipe!</button>
  </div>
  );
};

export default RecipeCard;
