import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

function Dashboard() {
  const [meteoCity, setMeteoCity] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const history = useHistory();

  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/${search}`);
    setSearch("");
  };

  useEffect(() => {
    setError(null);
    setIsLoading(false);
    axios
      .get(`https://www.prevision-meteo.ch/services/json/${search}`)
      .then((res) => {
        setMeteoCity(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        setError(null);
      });
  }, [search]);

  if (isLoading) return <h1>Loading....</h1>;

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
    </div>
  );
}

export default Dashboard;
