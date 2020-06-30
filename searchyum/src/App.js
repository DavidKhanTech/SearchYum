import React, { useState } from "react";
import "./App.css";
import Axios from "axios";

function App() {
  // creating state query will be data and setQuery is method
  const [query, setQuery] = useState("");

  // create recipes
  const [recipes, setRecipes] = useState([]);

  const appId = "f546136b";
  const key = "a92b6c90a77faae0bb4555f47a23924f";

  const url = `https://api.edamam.com/search?q=${query}&app_id=${appId}&app_key=${key}`;

  const data = async () => {
    const result = await Axios.get(url);

    setRecipes(result.data.hits);
    console.log(result);
    setQuery("");
  };
  // text input component
  const searchInput = (e) => {
    setQuery(e.target.value);
  };

  const submit = (e) => {
    e.preventDefault();
    data();
  };

  return (
    <>
      {/* heading component */}

      <h1>SearchYum</h1>

      {/* search component */}
      <form className="search" onSubmit={submit}>
        {/* input into component */}
        <input
          type="text"
          placeholder="Whats in your fridge?"
          onChange={searchInput}
          value={query}
        />
        <input type="submit" value="Search" />
      </form>
      {/* ------------------------------------------------------ */}
      {/* recipes component  */}

      <div className="recipes">
        {/* condition to check if recipe array is empty or not if empty recieve data */}
        {recipes !== [] &&
          recipes.map((recipe) => <h2>{recipe.recipe.label}</h2>)}
      </div>
    </>
  );
}

export default App;
