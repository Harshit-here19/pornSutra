import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import NavButtons from "./Utility/NavButtons";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { pathname } = useLocation();
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <nav className="bg-yellow-300 text-red-600 p-4 flex justify-between items-start">
        <div className="text-3xl font-extrabold" onClick={() => navigate("/")}>
          Porn<span className="text-black">Sutra</span>
        </div>
        <ul className="hidden md:flex space-x-4">
          <li>
            <NavButtons path={pathname} title="Home" to="/" />
          </li>
          <li>
            <NavButtons path={pathname} title="PornStars" to="/pornstars" />
          </li>
          <li>
            <NavButtons path={pathname} title="Art" to="/art" />
          </li>
        </ul>
        <div className="md:hidden">
          <button onClick={toggleMobileMenu}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="(link unavailable)"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>
      {mobileMenuOpen && (
        <ul className="bg-yellow-300 text-white p-4 flex flex-col gap-8 justify-between items-center w-1/3 right-0 absolute rounded-bl-lg animate-appearing z-30">
          <li onClick={() => setMobileMenuOpen(false)}>
            <NavButtons path={pathname} title="Home" to="/" />
          </li>
          <li onClick={() => setMobileMenuOpen(false)}>
            <NavButtons path={pathname} title="PornStars" to="/pornstars" />
          </li>
          <li onClick={() => setMobileMenuOpen(false)}>
            <NavButtons path={pathname} title="Art" to="/art" />
          </li>
        </ul>
      )}
    </>
  );
};

export default Navbar;
