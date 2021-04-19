import { useEffect, useState } from "react";
import React from "react";

export default function Meteo3({ meteo }) {
  const [ilclick, setIlClick] = useState("");

  function handleClick(e) {
    {
      meteo.current_condition.condition;
    }
    console.log(`il fait ${meteo.current_condition.condition}`);
  }

  return (
    <div>
      <label for="City-select">Choose a city: </label>

      <select name="city" id="citySelect">
        <option value="">Choose Below</option>
        <option value="paris">Paris</option>
        <option value="bordeaux">Bordeaux</option>
        <option value="biarritz">Biarritz</option>
        <option value="lyon">Lyon</option>
        <option value="cannes">Cannes</option>
      </select>
      <div>{meteo.current_condition.condition}</div>
    </div>
  );
}
