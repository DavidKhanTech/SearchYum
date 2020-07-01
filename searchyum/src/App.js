import React, { useState } from "react";
import "./App.css";
import Axios from "axios";
import Recipe from "./components/Recipe";
// console error fix
import { v4 as uuidv4 } from "uuid";
import Alerts from "./components/Alerts";
import Home from "./components/Home";
import Header from "./components/Header";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  // creating state query for data and setQuery is method
  const [query, setQuery] = useState("");
  // create recipes
  const [recipes, setRecipes] = useState([]);
  // alerts
  const [alert, setAlert] = useState("");

  const appId = "f546136b";
  const key = "a92b6c90a77faae0bb4555f47a23924f";

  const url = `https://api.edamam.com/search?q=${query}&app_id=${appId}&app_key=${key}`;

  const data = async () => {
    // setting alert if query does not equal empty string
    if (query !== "") {
      const result = await Axios.get(url);
      if (!result.data.more) {
        return setAlert("Is that food? Try another name");
      }
      setRecipes(result.data.hits);

      setQuery("");
      setAlert("");
    } else {
      setAlert("Please enter an ingredient");
    }
  };
  const searchInput = (e) => {
    setQuery(e.target.value);
  };
  const submit = (e) => {
    e.preventDefault();
    data();
  };
  return (
    <>
      <Router>
        <Header />
      </Router>
      <form className="search" onSubmit={submit}>
        {alert !== "" && <Alerts alert={alert} />}
        <input
          type="text"
          placeholder="Whats in your fridge?"
          onChange={searchInput}
          value={query}
        />
        <input type="submit" value="Search" />
      </form>
      {/* -----------------------recipes----------------- */}

      <div className="recipes">
        {/* condition to check if recipe array is empty or not if empty recieve data */}
        {recipes !== [] &&
          recipes.map((recipe) => <Recipe key={uuidv4()} recipe={recipe} />)}
      </div>
    </>
  );
}
export default App;
