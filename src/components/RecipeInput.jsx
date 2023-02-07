import React, { useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import RecipeCard from "./RecipeCard";

const RecipeInput = ({recipes}) => {
  const [searchRecipe, setSearch] = useState("");

    const displayRecipes = recipes.filter((recipe) => {
        let title = recipe.recipe_name.toLowerCase();
        let params = searchRecipe.toLowerCase();
        return title.includes(params);
    }).map((recipe) => {
        <RecipeCard recipe={recipe}/>
    })

  return (
    <section>
      <span className="searchInput">
        <BiSearchAlt2 className="searchIcon" size="2em" color="#DA7635" />
        <input
          className="searchRecipe"
          type="text"
          value={searchRecipe}
          onClick={(e) => {setSearch(e.target.value)}}
          placeholder="Search for a Recipe!"
        />
      </span>
    </section>
  );
};

export default RecipeInput;
