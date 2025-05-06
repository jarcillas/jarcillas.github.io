const Navbar = () => (
  <h1 className="w-full flex fixed justify-between items-center mt-0 px-8 pt-2 pb-3 font-title text-2xl font-normal text-primary">
    <div>
      <a className="hover:animate-tada" href="/">
        jarcillas
      </a>
    </div>
    <div className="flex items-center space-x-16 text-xl">
      <a href="/" className="hover:animate-tada">
        projects
      </a>
      <a href="/" className="hover:animate-tada">
        contact
      </a>
      <a href="/" className="hover:animate-tada">
        about
      </a>
    </div>
  </h1>
);

export { Navbar };
