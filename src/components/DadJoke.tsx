import { useState } from "react";
import { useFetch } from "../hooks/useFetch";

const DadJoke = ({
  className,
  jokeClasses,
}: {
  className?: string;
  jokeClasses?: string;
}) => {
  const [showDadJoke, setShowDadJoke] = useState(true);

  const { data, isLoading, fetchData } = useFetch(
    "https://icanhazdadjoke.com/",
    {
      headers: {
        Accept: "application/json",
      },
    }
  );

  const baseClasses =
    "w-full flex flex-col justify-center items-center container";
  const combinedClasses = `${baseClasses} ${className}`.trim();

  const baseJokeClasses =
    "font-title text-3xl font-extralight flex items-center h-full w-fit rounded-lg tracking-tight text-center text-balance text-primary";
  const combinedJokeClasses = `${baseJokeClasses} ${jokeClasses}`.trim();

  console.log("Mounting DadJoke component...");
  return (
    <div className={combinedClasses}>
      <div className={combinedJokeClasses}>
        {showDadJoke ? data?.joke : "No dad joke yet."}
      </div>
      <div className="flex items-center gap-4">
        <button
          className="py-2 px-4 w-[200px] bg-slate-900 text-primary rounded-lg hover:bg-slate-700 text-lg font-title"
          onClick={() => {
            setShowDadJoke(true);
            fetchData();
          }}
          disabled={isLoading}
        >
          {isLoading ? "Loading..." : "Fetch a Dad Joke "}
        </button>
        <button
          className="py-2 px-4 w-[200px] bg-slate-900 text-primary rounded-lg hover:bg-slate-700 text-lg font-title"
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
