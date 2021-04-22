import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import MeteoChoosen from "./MeteoChoosen";

export default function ChooseYourPositions() {
  const [position, setPosition] = useState("");
  const { lat } = useParams();

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon={lon}&appid=60915be832375658d25f7f20800fc811`
      )
      .then((res) => {
        setPosition(res.data);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [lat]);

  function handleSubmit(e) {
    e.preventDefault();
    setPosition("");
    console.log("je submite");
  }

  return (
    <div>
      <h1>Choose your position and tell us your city</h1>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Choose your Latitude"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
        />
        <button type="submit"></button>
      </form>
      <MeteoChoosen />
    </div>
  );
}
