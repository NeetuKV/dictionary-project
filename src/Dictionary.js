import React, { useState } from "react";
import Results from "./Results";
import axios from "axios";
import "./Dictionary.css";
export default function Dictionary() {
  let [keyWord, setKeyWord] = useState("");
  let [results, setResults] = useState(null);
  function handleResponse(response) {
    setResults(response.data[0]);
  }
  function search(event) {
    event.preventDefault();
    let apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyWord}`;
    axios.get(apiURL).then(handleResponse);
  }
  function handleKeyWordChange(event) {
    setKeyWord(event.target.value);
  }
  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" onChange={handleKeyWordChange} />
      </form>
      <Results results={results} />
    </div>
  );
}
