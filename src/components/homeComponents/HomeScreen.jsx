import React, { useEffect } from "react";
import axios from "axios";
import AdBanner from "./AdBanner";

const HomeScreen = () => {
  const recipes = () => {
    axios.get("https://recipes.devmountain.com/recipes").then((res) => {
      console.log(res.data);
      // setRecipe(res.data);
    });
  };

  useEffect(() => {
    recipes();
  }, []);

  return (
    <div>
      <AdBanner />
      {/* Much code from Part 2 will be placed around here. Do your best! */}
    </div>
  );
};

export default HomeScreen;
