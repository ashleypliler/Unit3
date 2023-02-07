import React, { useEffect, useState } from "react";
import axios from "axios";
import AdBanner from "./AdBanner";
import RecipeCard from "../RecipeCard";
import RecipeInput from "../RecipeInput";



const HomeScreen = () => {
  const [recipes, setRecipes] = useState([]);

  const getRecipes = () => {
    axios.get(`https://recipes.devmountain.com/recipes`).then((res) => {
      console.log(res.data)
      setRecipes(res.data);
    })
  }

  useEffect(() => {
    getRecipes();
  }, []);


  return (
    <div>
      <AdBanner />
      <RecipeCard/>
      <RecipeInput recipes={recipes}/>
      {/* Much code from Part 2 will be placed around here. Do your best! */}
    </div>
  );
};

export default HomeScreen;
