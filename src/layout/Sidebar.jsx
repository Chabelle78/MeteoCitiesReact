import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/city/biarritz">Biarritz</Link>
        </li>
        <li>
          <Link to="/city/paris">Paris</Link>
        </li>
        <li>
          <Link to="/city/pau">Pau</Link>
        </li>
        <li>
          <Link to="/lat/lat">Aleatoire</Link>
        </li>
        <li>
          <Link to="/city/your-city"> Your city ?</Link>
        </li>
        <li>
          <Link to="/dadjokes"> Funny DadJokes</Link>
        </li>
      </ul>
    </div>
  );
}
