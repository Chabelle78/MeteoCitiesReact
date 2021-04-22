import axios from "axios";
import React, { useEffect, useState } from "react";

export default function DadJokes() {
  const [jokes, setJokes] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        `https://dad-jokes.p.rapidapi.com/random/joke/?rapidapi-key=67f146500amsh5181c60594a4bd3p1a8088jsn2f5864686f44`
      )
      .then((res) => {
        setJokes(res.data);
        console.log(res.data);
      })
      .then((res) => {
        setIsLoading(false);
      })
      .catch(console.error);
  }, [jokes]);

  //   if (!isLoading) return <h1>Loading...</h1>;

  return (
    <div>
      <h1>DadJokes {jokes.data}</h1>
    </div>
  );
}

// {isLoading && (
//     <>
//       <h1>Punchline</h1>
//       {body.map((body, index) => {
//         <p key={index}>{body.punchline}</p>;
//       })}
//     </>
//   )}
