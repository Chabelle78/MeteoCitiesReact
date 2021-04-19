import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Paris() {
  const [meteoParis, setMeteoParis] = useState([]);
  const [isLoadingParis, setIsLoadingParis] = useState(true);

  useEffect(async () => {
    const resultParis = await axios(
      "https://www.prevision-meteo.ch/services/json/paris"
    );
    setMeteoParis(resultParis.data);
    setIsLoadingParis(false);
  });

  return (
    <div>
      <h1>Quel temps fait-il à Paris?</h1>
      {!isLoadingParis && (
        <p>
          Nous avons actuellement sur Paris :
          {meteoParis.current_condition.condition}
        </p>
      )}
      {!isLoadingParis && (
        <img
          src={meteoParis.current_condition.icon_big}
          alt="Meteo In Paris"
        ></img>
      )}
    </div>
  );
}
