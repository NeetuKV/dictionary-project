import React, { useState } from "react";
import Results from "./Results";
import axios from "axios";
import "./Dictionary.css";
export default function Dictionary(props) {
  let [keyWord, setKeyWord] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  function handleResponse(response) {
    setResults(response.data[0]);
  }
  function search() {
    let apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyWord}`;
    axios.get(apiURL).then(handleResponse);
    let pexelApiKey =
      " Q4MMFsOMnY6ZxeFvxwdRmDeVaI4wcpO5zMYI4u3VDpgNlEUIitNsiI05";
  }
  function handlesubmit(response) {
    setResults(response.data[0]);
    search();
  }

  function handleKeyWordChange(event) {
    setKeyWord(event.target.value);
  }
  function load() {
    setLoaded(true);
    search();
  }
  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <h1>What are you looking for?</h1>
          <form onSubmit={handlesubmit}>
            <input
              type="search"
              onChange={handleKeyWordChange}
              defaultValue={props.defaultKeyword}
            />
          </form>
          <div className="hint">
            Suggested words : sunset, wine, yoga, forest, plant...
          </div>
        </section>
        <Results results={results} />
      </div>
    );
  } else {
    load();
    return "Loading..";
  }
}
