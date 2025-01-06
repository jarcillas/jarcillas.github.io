import { DadJoke } from "./components/DadJoke";
import "./App.css";

function App() {
  return (
    <>
      <h1 className="w-full flex justify-center px-4 pt-2 pb-3 font-title text-2xl align-middle font-normal border-b-slate-400 border-2">
        <a className="hover:animate-tada" href="/">
          jarcillas.github.io
        </a>
      </h1>

      <div className="w-full flex flex-col items-center">
        <DadJoke />
      </div>
    </>
  );
}

export default App;
