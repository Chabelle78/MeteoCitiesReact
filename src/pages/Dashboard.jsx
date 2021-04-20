import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Dashboard() {
  const [meteoCity, setMeteoCity] = useState({});
  const [error, setError] = useState(null);

  const { choosenCity } = useParams();

  useEffect(() => {
    setError(null);
    fetch(`https://www.prevision-meteo.ch/services/json/${choosenCity}`)
      .then((res) => {
        if (res.status >= 400) {
          throw new Error("Cela ne marche pas. Veuillez réessayer");
        }
        return res.json();
      })
      .then((res) => {
        setMeteoCity(res);
      })
      .catch((err) => {
        setError(err);
      });
  }, [choosenCity]);

  if (error) {
    return <div>ERROR</div>;
  }

  return (
    <div>
      <h1>Quelle météo fait il à {choosenCity} ? </h1>
      <a
        href={`https://prevision-meteo.ch/meteo/localite/${choosenCity}`}
        target="_blank"
      >
        Détails des prévisions météo de votre ville : {choosenCity}
      </a>
    </div>
  );
}

export default Dashboard;
