import React from "react";
import { Link } from "react-router-dom";

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
        <div className="grid grid-cols-6">
          <Link to={`/city/sydney`}>
            <p>Sydney</p>
          </Link>
          <Link to={`/city/london`}>
            <p>London</p>
          </Link>
          <Link to={`/city/stockholm`}>
            <p>Stockholm</p>
          </Link>
          <Link to={`/city/zaragoza`}>
            <p>Zaragoza</p>
          </Link>
          <Link to={`/city/montreal`}>
            <p>Montreal</p>
          </Link>
          <Link to={`/city/sanvicentedelabarquera`}>
            <p>San Vicente de La Barquera</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
