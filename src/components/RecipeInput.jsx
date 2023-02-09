import React, { useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import RecipeCard from "./RecipeCard";

const RecipeInput = ({recipes}) => {
  const [searchRecipe, setSearch] = useState("");

    const displayRecipes = recipes.filter((recipe, index) => {
        let title = recipe.recipe_name.toLowerCase();
        let params = searchRecipe.toLowerCase();
        return title.includes(params);
    }).map((recipe, index) => {
        <RecipeCard recipe={recipe}/>
    })

  return (
    <section className="recipe_section">
    <span className="search_bar">
      <BiSearchAlt2 size="2em" color="#DA7635" />
      <input
        type="text"
        value={searchRecipe}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search for a Recipe"
      />
    </span>
    <div className="recipe_container">
      {displayRecipes ? displayRecipes : <h2>No Recipes :</h2>}
    </div>
  </section>
  );
};

export default RecipeInput;
