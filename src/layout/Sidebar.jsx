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
          <Link to="/biarritz">Biarritz</Link>
        </li>
        <li>
          <Link to="/paris">Paris</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      </ul>
    </div>
  );
}
