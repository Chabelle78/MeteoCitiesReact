import React from "react";

export default function JobLists({
  city,
  country,
  category,
  months,
  school,
  company,
  manager,
  cover,
}) {
  return (
    <div
      className="text-center px-3"
      style={{
        backgroundImage: `url(${cover})`,
        backgroundPosition: "left",
        backgroundSize: "cover",
      }}
    >
      <p>{country}</p>
      <p>{city}</p>
      <p>{category}</p>
      <p>{months} months </p>
      <p>{school}</p>
      <p>
        I worked for {company} with {manager}
      </p>
    </div>
  );
}
