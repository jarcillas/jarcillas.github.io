import { useState } from "react";
import { useFetch } from "../hooks/useFetch";

const DadJoke = () => {
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
    <div className="w-full flex flex-col justify-center items-center gap-y-4 container">
      <div className="font-title text-3xl text-slate-900 font-extralight flex items-center h-[120px] p-2 w-fit rounded-lg tracking-tight text-center text-balance">
        {showDadJoke ? data?.joke : "No dad joke yet."}
      </div>
      <div className="flex items-center gap-4">
        <button
          className="py-2 px-4 w-[200px] bg-slate-900 text-slate-300 rounded-lg hover:bg-slate-700 text-lg font-title"
          onClick={() => {
            setShowDadJoke(true);
            fetchData();
          }}
          disabled={isLoading}
        >
          {isLoading ? "Loading..." : "Fetch a Dad Joke "}
        </button>
        <button
          className="py-2 px-4 w-[200px] bg-slate-900 text-slate-300 rounded-lg hover:bg-slate-700 text-lg font-title"
          onClick={() => {
            setShowDadJoke(false);
          }}
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export { DadJoke };
