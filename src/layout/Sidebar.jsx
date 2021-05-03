import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="text-white bg-gray-700 h-20">
      <ul className="flex justify-around items-center pt-6">
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
          <Link to="/city/your-city"> Your city ?</Link>
        </li>
        <li>
          <Link to="/formulaires"> Forms </Link>
        </li>
      </ul>
    </div>
  );
}
