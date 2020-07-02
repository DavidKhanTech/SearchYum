import React, { useState } from "react";
import Details from "./Details";

const Recipe = ({ recipe }) => {
  //toggle action
  const [show, setShow] = useState(false);

  const { label, image, url, ingredients } = recipe.recipe;
  return (
    <div className="recipe">
      <h2>{label}</h2>
      <img src={image} alt={label}></img>
      <a href={url} target="_blank" rel="noopener noreferrer">
        Click Here For Easy Step by Step Directions!
      </a>
      {/* setShow method to update true or false on click */}
      <button onClick={() => setShow(!show)}>Ingredients</button>
      {show && <Details ingredients={ingredients} />}
    </div>
  );
};

export default Recipe;
