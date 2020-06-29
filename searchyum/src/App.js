import React from "react";
import "./App.css";
import axios from "axios";

function App() {
  const appId = "f546136b";
  const key = "a92b6c90a77faae0bb4555f47a23924f";

  const url = `https://api.edamam.com/search?q=chicken&app_id=${appId}&app_key=${key}`;

  const data = async () => {
    const result = await axios.get(url);
    console.log(result);
  };
  return (
    <>
      <h1 onClick={data}>SearchYum</h1>
    </>
  );
}

export default App;
