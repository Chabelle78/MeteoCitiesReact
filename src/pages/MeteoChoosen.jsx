import React, { useState, useEffect } from "react";
import { API_URL } from "../layout/Apiurl";
import axios from "axios";
import { useParams, useHistory } from "react-router";

export default function MeteoChoosen() {
  const [meteo, setMeteo] = useState({});
  const { city } = useParams();
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(true);

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
      .then((res) => {
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [city]);
  if (isLoading) {
    return <h1>Loading...</h1>;
  }

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
      <p>Nous avons actuellement sur {city} :</p>
      <p>{meteo.name}</p>
      {!isLoading && (
        <>
          {meteo.weather.map((item) => {
            return <p key={item.id}>{item.main}</p>;
          })}
        </>
      )}
      ;;
      <img src={city.current_condition?.icon_big} alt="Meteo In"></img>
    </div>
  );
}
