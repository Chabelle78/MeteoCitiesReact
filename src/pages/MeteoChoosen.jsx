import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router";
import CitiesVisited from "./CitiesVisited.jsx/CitiesVisited";
import Spinner from "./Spinner/Spinner";
import JobLists from "./Employment/JobLists";

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

  const icon = (iconMeteo) => {
    switch (iconMeteo) {
      case "Thunderstorm":
        return "https://img.icons8.com/doodle/48/000000/cloud-lighting.png";
      case "Drizzle":
        return "https://img.icons8.com/doodle/48/000000/rain--v1.png";
      case "Rain":
        return "https://img.icons8.com/doodle/48/000000/rain--v1.png";
      case "Snow":
        return "https://img.icons8.com/doodle/48/000000/snow--v1.png";
      case "Clear":
        return "https://img.icons8.com/doodle/48/000000/sun--v1.png";
      case "Clouds":
        return "https://img.icons8.com/doodle/48/000000/partly-cloudy-day.png";
      default:
        return "https://img.icons8.com/plasticine/100/000000/foggy-night-1.png";
    }
  };

  const tempIcon = (tempIcon) => {
    if (tempIcon >= 30) return "🥵";
    else if (tempIcon <= 10) return "🥶";
    else return "😊";
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
          className="border-2 rounded-2xl border-blue-300 px-6 py-2 focus:outline-none capitalize"
        ></input>
      </form>
      <h1 className="text-lg py-2 capitalize">
        What's the weather in {!(city === "your-city") && city} ?
      </h1>
      <p className="capitalize">{!(city === "your-city") && city} It looks :</p>
      {!isLoading && !isError && (
        <>
          {meteo.weather.map((item) => {
            return (
              <div key={item.id}>
                <p className="capitalize" key={item.id}>
                  {item.description}
                </p>
                <img src={`${icon(item.main)}`} alt="" width="45rem" />
              </div>
            );
          })}

          <p>
            {meteo.main.temp} Celsius Degrees {tempIcon(meteo.main.temp)}
          </p>
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
