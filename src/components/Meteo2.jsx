import React from "react";

export default function Meteo2({ result }) {
  return (
    <div>
      <div>{result.current_condition.condition}</div>
      <img src={result.current_condition.icon_big}></img>
    </div>
  );
}
