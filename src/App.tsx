import {
  RouterProvider,
  Outlet,
  createRootRoute,
  createRoute,
  createRouter,
  redirect,
  createHashHistory,
} from "@tanstack/react-router";
import "./App.css";
import { ProjectList } from "./components/ProjectList";
import { Contact } from "./components/Contact";
import { About } from "./components/About";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";

// Dummy data for ProjectList
import { projectList } from "./data/projectList"; // adjust import as needed

const hashHistory = createHashHistory();

// Define the root route
const rootRoute = createRootRoute({
  component: () => (
    <div className="overflow-hidden bg-dark-gradient-1 h-screen flex flex-col items-center pb-2 font-mono">
      <Navbar />

      <div className="flex-grow w-full overflow-x-hidden md:mt-14 mt-28 flex flex-col items-center">
        <div className="max-w-90 sm:max-w-160 sm:min-w-120 md:min-160 lg:min-w-256 w-full flex flex-col flex-grow">
          <Hero />
          <section className="flex flex-col items-center w-full h-[400px] max-w-5xl mx-auto mt-0 text-secondary">
            <Outlet />
          </section>
        </div>
      </div>
    </div>
  ),
});

// Add an index route that redirects to /project
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  loader: () => {
    throw redirect({ to: "/project" });
  },
  component: () => null,
});

// Define child routes
const projectRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/project",
  component: () => <ProjectList list={projectList} />,
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: () => <Contact />,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: () => <About />,
});

// Create the route tree
const routeTree = rootRoute.addChildren([
  indexRoute,
  projectRoute,
  contactRoute,
  aboutRoute,
]);

// Create the router
const router = createRouter({
  routeTree,
  defaultPreload: "intent",
  history: hashHistory,
});

// function App() {
//   return (
//     <>
//       <Navbar />
//       <Hero />
//       <RouterProvider router={router} />
//     </>
//   );
// }

function App() {
  return <RouterProvider router={router} />;
}

export default App;
