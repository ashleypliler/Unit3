import React, { useEffect, useState } from "react";
import axios from "axios";
import AdBanner from "./AdBanner";
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
      <RecipeInput recipes={recipes}/>
    </div>
  );
};

export default HomeScreen;
