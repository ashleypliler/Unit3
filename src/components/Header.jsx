import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <h2 className="headerName">Devmountain Eatery</h2>
      <nav>
        <Link to="">
          <button className="nav-button" id="homeBtn">Home</button>
        </Link>
        <Link to="newRecipe">
          <button className="nav-button" id="recipeBtn">Add Recipe</button>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
