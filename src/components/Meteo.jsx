import React from "react";

export default function Meteo({ resultApi }) {
  return (
    <div>
      <div></div>
      <div>{resultApi.current_condition.condition}</div>
      <div></div>
    </div>
  );
}
