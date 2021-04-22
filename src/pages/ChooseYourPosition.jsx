import React, { useState } from "react";

export default function ChooseYourPositions() {
  const [position, setPosition] = useState("");

  return (
    <div>
      <h1>Choose your position and telle us your city</h1>
      <form action="">
        <input type="text" value="" />
        <button type="submit"></button>
      </form>
    </div>
  );
}
