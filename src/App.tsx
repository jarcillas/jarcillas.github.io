import { DadJoke } from "./components/DadJoke";
import "./App.css";
import { ProjectList } from "./components/ProjectList";

const projectList = [
  {
    title: "Project 1",
    url: "https://www.google.com",
  },
  { title: "Project 2" },
];

function App() {
  return (
    <div className="overflow-hidden bg-dark-gradient-1 h-screen">
      <h1 className="w-full flex fixed justify-between items-center mt-0 px-4 pt-2 pb-3 font-title text-2xl font-normal text-primary">
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
        <ProjectList list={projectList} />
      </div>
    </div>
  );
}

export default App;
