import axios from "axios";
import React, { useEffect, useState } from "react";

export default function DadJokes() {
  const [jokes, setJokes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        `https://us-central1-dadsofunny.cloudfunctions.net/DadJokes/random/jokes/10`
      )
      .then((res) => {
        setJokes(res.data);
      })
      .then((res) => {
        setIsLoading(false);
      })
      .catch(console.error);
  }, [jokes]);

  if (!isLoading) return <h1>Loading...</h1>;

  return (
    <div>
      {jokes.map((jokes) => {
        return (
          <div>
            <h1>DadJokes {jokes.punchcline}</h1>
            <h2 key={jokes.id}>{jokes.setup}</h2>
            <p key={jokes.id}>{jokes.punchline}</p>
          </div>
        );
      })}
    </div>
  );
}
