import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router";
import CitiesVisited from "./CitiesVisited.jsx/CitiesVisited";
import Spinner from "./Spinner/Spinner";

export default function MeteoChoosen({ img }) {
  const [meteo, setMeteo] = useState({});
  const { city } = useParams();
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [isError, setIsError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/city/${search}`);
    setSearch("");
  };

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=60915be832375658d25f7f20800fc811`
      )
      .then((res) => {
        setMeteo(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [city]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="flex flex-col  px-5 mx-12 h-screen">
      <form onSubmit={handleSubmit} className="my-3  ">
        <input
          type="text"
          placeholder="What is your city?"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border-2 rounded-2xl border-blue-300 px-6 py-2"
        ></input>
      </form>
      <h1 className="text-lg py-2 ">
        What's the weather in {!(city === "your-city") && city} ?
      </h1>
      <p>{!(city === "your-city") && city} It looks :</p>
      {!isLoading && !isError && (
        <>
          {meteo.weather.map((item) => {
            return <p key={item.id}>{item.description}</p>;
          })}
          <p>{meteo.main.temp} Celsius Degrees</p>
          <p>Felt like {meteo.main.feels_like}</p>
          <p>Level of humidity {meteo.main.humidity}%</p>
          <p>
            Wind is {meteo.wind.speed} and direction of the wind
            {meteo.wind.deg}
          </p>
        </>
      )}
      <CitiesVisited search={search} setSearch={setSearch} city={city} />
    </div>
  );
}
