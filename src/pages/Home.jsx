import React from "react";
import { Link } from "react-router-dom";
import CitiesVisited from "./CitiesVisited.jsx/CitiesVisited";

export default function Home() {
  return (
    <div className="flex flex-col items-center px-5 mx-12 h-screen ">
      <h1 className="text-lg bold underline py-8 align-top ">
        Welcome to Travelled Weather
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo est
        ad esse amet velit? Voluptas ut, placeat quos natus necessitatibus, rem,
        eaque ducimus amet autem reiciendis perspiciatis iure omnis nesciunt.
      </p>
      <div>
        <h2>Travelled with me</h2>
        <CitiesVisited />
      </div>
    </div>
  );
}
