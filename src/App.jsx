import { useState } from "react";
import { useFetch } from "./hooks/useFetch";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [showDadJoke, setShowDadJoke] = useState(true);

  const { data, isLoading, fetchData } = useFetch(
    "https://icanhazdadjoke.com/",
    {
      headers: {
        Accept: "application/json",
      },
    }
  );

  // const fetchDadJoke = async () => {
  //   try {
  //     // Fetch a dad joke
  //     const response = await fetch("https://icanhazdadjoke.com/", {
  //       headers: {
  //         Accept: "application/json",
  //       },
  //     });
  //     const result = await response.json();
  //     setDadJoke(result.joke);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //     setDadJoke("Error fetching joke.");
  //   }
  // };

  return (
    <>
      <h1 className="header">
        <a href="/">jarcillas.github.io</a>
      </h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={() => setCount(0)}>reset</button>
      </div>
      <div className="box">
        <div className="buttons">
          <button
            onClick={() => {
              setShowDadJoke(true);
              fetchData();
            }}
          >
            {isLoading ? "Loading..." : "Fetch a Dad Joke "}
          </button>
          <button
            onClick={() => {
              setShowDadJoke(false);
            }}
          >
            Clear
          </button>
        </div>
        <p className="dadjoke">{showDadJoke ? data?.joke : ""}</p>
      </div>
    </>
  );
}

export default App;
