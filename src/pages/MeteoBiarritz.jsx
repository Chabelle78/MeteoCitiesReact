import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export default function MeteoBiarritz() {
  const [meteoBtz, setMeteoBtz] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://www.prevision-meteo.ch/services/json/biarritz")
      .then((res) => {
        setMeteoBtz(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(meteoBtz);

  return (
    <div>
      <h1>Quel temps fait-il à Biarritz?</h1>
      {!isLoading && (
        <>
          <p>
            Nous avons actuellement sur Biarritz :
            {meteoBtz.current_condition.condition}
          </p>
        </>
      )}
      {!isLoading && (
        <img
          src={meteoBtz.current_condition.icon_big}
          alt="Meteo In Biarritz"
        ></img>
      )}
    </div>
  );
}
