import React from "react";
import salmon from "../../assets/salmon.jpg";
import { Link } from "react-router-dom";

const AdBanner = () => {
  return (
    <div className="recipePic"
      style={{
        background: `linear-gradient(
          190deg,
          rgba(0, 0, 0, 0.8),
          rgba(0, 0, 0, 0.8)),
          url(${salmon})`,
        backgroundSize: "cover",
      }}
    >
      <div className="adHeader">
        <h3 className="adHeader1">New Recipe</h3>
        <h1 className="adHeader2">Pineapple Salmon</h1>
        <h2 className="adRecipe">
          This recipe consists of fresh wild Alaskan salmon, rubbed in a bbq
          brown sugar rub, baked for 25 minutes on a bed of pineapple, and garnished in butter, garlic, and chives. You won’t want to miss it!
        </h2>
        <Link to="/recipe/3">
          <button className="blue-btn">See Recipe!</button>
        </Link>
      </div>
    </div>
  );
};

export default AdBanner;
