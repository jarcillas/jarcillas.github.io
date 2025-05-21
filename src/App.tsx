// import { DadJoke } from "./components/DadJoke";
import "./App.css";
// import { ProjectList } from "./components/ProjectList";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";

// const projectList = [
//   {
//     title: "Project 1",
//     url: "https://www.google.com",
//   },
//   { title: "Project 2" },
// ];

function App() {
  return (
    <div className="overflow-hidden bg-dark-gradient-1 h-screen flex flex-col items-center">
      <Navbar />

      <div className="sm:min-w-120 md:min-w-160 lg:min-w-240 mt-14 flex flex-col flex-grow ">
        <Hero />
        {/* <div className="w-[600px] py-4">
          <DadJoke className="gap-y-6" />
        </div> */}
        {/* <ProjectList list={projectList} /> */}
      </div>
    </div>
  );
}

export default App;
