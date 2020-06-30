import React, { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  // creating state
  const [query, setQuery] = useState("");

  const appId = "f546136b";
  const key = "a92b6c90a77faae0bb4555f47a23924f";

  const url = `https://api.edamam.com/search?q=chicken&app_id=${appId}&app_key=${key}`;

  const data = async () => {
    const result = await axios.get(url);
    // console.log(result);
  };
  // text input
  const searchInput = (e) => {
    console.log(e.target.value);
  };

  const submit = (e) => {
    e.preventDefault();
    data();
  };

  return (
    <>
      {/* heading into component */}
      <h1>SearchYum</h1>
      <form className="search" onSubmit={submit}>
        {/* input into component */}
        <input
          type="text"
          placeholder="Whats in your fridge?"
          onChange={searchInput}
          searchInput
        />
        <input type="submit" value="search" />
      </form>
    </>
  );
}

export default App;
