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
      <h1 className="w-full flex justify-center px-4 pt-2 pb-3 font-title text-2xl align-middle font-normal border-b-slate-400 border-2">
        <a className="hover:animate-tada" href="/">
          jarcillas.github.io
        </a>
      </h1>

      <div className="w-full flex flex-col justify-center items-center gap-y-4">
        <div className="font-title text-3xl text-slate-900 font-extralight p-8 w-fit rounded-lg tracking-tight text-center">
          {showDadJoke ? data?.joke : "No dad joke yet."}
        </div>
        <div className="flex items-center gap-4">
          <button
            className="p-2 bg-slate-900 text-slate-300 rounded-lg hover:bg-slate-700 text-lg font-title"
            onClick={() => {
              setShowDadJoke(true);
              fetchData();
            }}
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Fetch a Dad Joke "}
          </button>
          <button
            className="p-2 bg-slate-900 text-slate-300 rounded-lg hover:bg-slate-700 text-lg font-title"
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
