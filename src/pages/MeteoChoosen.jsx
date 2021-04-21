import React, { useState, useEffect } from "react";
import { API_URL } from "../layout/Apiurl";
import axios from "axios";
import { useParams, useHistory } from "react-router";

export default function MeteoChoosen() {
  const [meteo, setMeteo] = useState({});
  const { city } = useParams();
  const history = useHistory();

  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/${search}`);
    setSearch("");
  };

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=60915be832375658d25f7f20800fc811`
      )
      .then((res) => {
        setMeteo(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [city]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="What is your city?"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        ></input>
      </form>
      <h1>Quel temps fait-il à {city}?</h1>
      <p>
        {/* Nous avons actuellement sur {city} :{meteo.current_condition?.condition} */}
      </p>
      {/* <img src={meteo.current_condition?.icon_big} alt="Meteo In"></img> */}
    </div>
  );
}
