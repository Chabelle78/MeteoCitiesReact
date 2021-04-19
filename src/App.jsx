import React, { useState, useEffect } from "react";
import axios from "axios";
import Meteo4 from "./components/Meteo4";

export default function App() {
  const [item, setItem] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(async () => {
    const result = await axios(
      "https://www.prevision-meteo.ch/services/json/lyon"
    );
    setItem(result.data);
    setIsLoading(false);
  }, []);

  function handleClick(e) {
    e.preventDefault();
    setItem("");
  }

  return (
    <div>{!isLoading && <Meteo4 item={item} handleClick={handleClick} />}</div>
  );
}
