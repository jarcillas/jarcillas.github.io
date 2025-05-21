// import { DadJoke } from "./components/DadJoke";
import "./App.css";
import { ProjectList } from "./components/ProjectList";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";

const projectList = [
  {
    title: "ShopEasy",
    url: "https://shopeasy-web.pages.dev/",
    screenshot: "https://placehold.co/400x200?text=Project+1",
  },
  {
    title: "Project 2",
    screenshot: "https://placehold.co/400x200?text=Project+2",
  },
  {
    title: "Project 3",
    screenshot: "https://placehold.co/400x200?text=Project+3",
  },
  {
    title: "Project 4",
    screenshot: "https://placehold.co/400x200?text=Project+4",
  },
  {
    title: "Project 5",
    screenshot: "https://placehold.co/400x200?text=Project+5",
  },
];

function App() {
  return (
    <div className="overflow-hidden bg-dark-gradient-1 h-screen flex flex-col items-center pb-2">
      <Navbar />

      <div className="sm:min-w-120 md:min-w-160 lg:min-w-240 mt-14 flex flex-col flex-grow ">
        <Hero />
        {/* <div className="w-[600px] py-4">
          <DadJoke className="gap-y-6" />
        </div> */}
        <ProjectList list={projectList} />
      </div>
    </div>
  );
}

export default App;
