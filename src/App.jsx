import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Meteo2 from "./components/Meteo2";
import axios from "axios";

function App() {
  const [result, setResult] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(async () => {
    const myResult = await axios(
      "https://www.prevision-meteo.ch/services/json/lyon"
    );
    setResult(myResult.data);
    setIsLoading(false);
  }, []);

  return <div className="App">{!isLoading && <Meteo2 result={result} />}</div>;
}

export default App;
