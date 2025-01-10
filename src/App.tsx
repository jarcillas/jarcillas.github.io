import { DadJoke } from "./components/DadJoke";
import "./App.css";

function App() {
  return (
    <div className="overflow-hidden">
      <h1 className="w-full flex fixed justify-between items-center mt-0 px-4 pt-2 pb-3 font-title text-2xl font-normal border-b-slate-400 border-[1px] bg-white">
        <div>
          <a className="hover:animate-tada" href="/">
            jarcillas.github.io
          </a>
        </div>
        <div className="flex items-center space-x-4 text-xl ">
          <a href="/" className="hover:animate-tada">
            Projects
          </a>
          <a href="/" className="hover:animate-tada">
            Contact
          </a>
          <a href="/" className="hover:animate-tada">
            About
          </a>
        </div>
      </h1>

      <div className="w-full mt-14 flex flex-col items-center">
        <div className="w-[600px] py-4">
          <DadJoke className="gap-y-6" />
        </div>
      </div>
    </div>
  );
}

export default App;
