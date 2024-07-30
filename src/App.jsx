import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [dadJoke, setDadJoke] = useState();

  const fetchDadJoke = async () => {
    try {
      // Fetch a dad joke
      const response = await fetch("https://icanhazdadjoke.com/", {
        headers: {
          Accept: "application/json",
        },
      });
      const result = await response.json();
      setDadJoke(result.joke);
    } catch (error) {
      console.error("Error fetching data:", error);
      setDadJoke("Error fetching joke.");
    }
  };

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
        <button onClick={fetchDadJoke}>Fetch a Dad Joke</button>
        <p className="dadjoke">{dadJoke || ""}</p>
      </div>
    </>
  );
}

export default App;
