import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export default function MeteoBiarritz() {
  const [meteoBtz, setMeteoBtz] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(async () => {
    const result = await axios(
      "https://www.prevision-meteo.ch/services/json/biarritz"
    );
    setMeteoBtz(result.data);
    setIsLoading(false);
  }, []);

  console.log(meteoBtz);

  return (
    <div>
      <h1>Quel temps fait-il à Paris?</h1>
      {!isLoading && (
        <>
          <p>
            Nous avons actuellement sur Paris :
            {meteoBtz.current_condition.condition}
          </p>
        </>
      )}
      {!isLoading && (
        <img
          src={meteoBtz.current_condition.icon_big}
          alt="Meteo In Paris"
        ></img>
      )}
    </div>
  );
}
