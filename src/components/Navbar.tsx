import { Link } from "@tanstack/react-router";

const Navbar = () => (
  <h1 className="w-full flex flex-col gap-4 md:gap-2 md:flex-row fixed justify-between items-center mt-0 px-8 pt-2 pb-3 font-mono text-xl font-normal text-primary">
    <div>
      <a className="hover:animate-tada" href="/">
        <span className="glow">jarcillas</span>
        <span className="hidden md:inline">.github.io</span>
      </a>
    </div>
    <div className="flex items-center space-x-16 text-xl">
      <Link to="/project" className="hover:animate-tada [&.active]:underline">
        projects
      </Link>
      <Link to="/contact" className="hover:animate-tada [&.active]:underline">
        contact
      </Link>
      <Link to="/about" className="hover:animate-tada [&.active]:underline">
        about
      </Link>
    </div>
  </h1>
);

export { Navbar };
