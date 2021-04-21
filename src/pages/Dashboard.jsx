import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { API_URL } from "../layout/Apiurl";

function Dashboard() {
  const [meteoCity, setMeteoCity] = useState("");
  const [error, setError] = useState(null);

  const { choosenCity } = useParams("");
  const [search, setSearch] = useState("");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/${search}`);
    setSearch("");
  };

  useEffect(() => {
    setError(null);
    axios
      .get(`${API_URL}${choosenCity}`)
      .then((res) => {
        setMeteoCity(res);
      })
      .catch((err) => {
        setError(err);
      });
  }, [choosenCity]);

  return (
    <div>
      <form onChange={handleSubmit}>
        Quelle météo fait il à {choosenCity} ?
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
      <p>Détails des prévisions météo de votre ville :{choosenCity}</p>
      <a
        href={`https://prevision-meteo.ch/meteo/localite/${choosenCity}`}
        target="_blank"
      ></a>
    </div>
  );
}

export default Dashboard;
