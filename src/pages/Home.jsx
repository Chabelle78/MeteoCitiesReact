import React, { useState } from "react";
import JobLists from "./Employment/JobLists";
import { JobListsDatas } from "./Employment/JobListsDatas";

export default function Home() {
  const [abroad, setAbroad] = useState(true);
  const [detailsJobs, setDetailsJobs] = useState(true);

  function HandleClick() {
    return setAbroad(!abroad);
  }

  function HandleClick2() {
    console.log("je clique");
    return setDetailsJobs(!detailsJobs);
  }

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
        <h2>Professionnal Experiences</h2>
        <div className="flex justify-around">
          <button onClick={(e) => HandleClick(e.target.value)}>
            {abroad
              ? "Click to see Experiences Abroad only"
              : "Click to see All"}
          </button>
          <button onClick={(e) => HandleClick2(e.target.value)}>
            {detailsJobs ? "Internship only" : "Back to all"}
          </button>
        </div>
        <ul className="flex flex-col md:flex-row">
          {JobListsDatas.filter((item) => {
            if (!abroad) {
              return item.country !== "France";
            } else if (!detailsJobs) {
              return item.category === "Internship";
            } else {
              return item;
            }
          }).map(
            ({
              id,
              city,
              country,
              category,
              months,
              school,
              company,
              manager,
              cover,
            }) => (
              <div key={id} className=" flex flex-col border-black border-2">
                <JobLists
                  id={id}
                  city={city}
                  country={country}
                  category={category}
                  months={months}
                  school={school}
                  company={company}
                  manager={manager}
                  cover={cover}
                />
              </div>
            )
          )}{" "}
        </ul>
      </div>
    </div>
  );
}
