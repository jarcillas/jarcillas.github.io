import { useState } from "react";
import { useFetch } from "./hooks/useFetch";
import "./App.css";

function App() {
  const [showDadJoke, setShowDadJoke] = useState(true);

  const { data, isLoading, fetchData } = useFetch(
    "https://icanhazdadjoke.com/",
    {
      headers: {
        Accept: "application/json",
      },
    }
  );

  return (
    <>
      <h1 className="w-full flex justify-center p-2 font-title text-4xl font-extralight">
        <a href="/">jarcillas.github.io</a>
      </h1>

      <div className="box">
        <p className="font-serif">{showDadJoke ? data?.joke : ""}</p>
        <div className="buttons">
          <button
            onClick={() => {
              setShowDadJoke(true);
              fetchData();
            }}
            disabled={isLoading}
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
      </div>
    </>
  );
}

export default App;
