import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

// Navigation menu items
const menuItems = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About Us" },
  { path: "/info", label: "Executives" },
  { path: "/board", label: "Board" },
  { path: "/etc", label: "Technologies" },
  { path: "/contact", label: "Contact" }
];

// Menu item component
const MenuItem = ({ path, label, onClick }) => (
  <li>
    <Link
      to={path}
      className="hover:text-blue-600 transition duration-300"
      onClick={onClick}
    >
      {label}
    </Link>
  </li>
);

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState('en');

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white text-black p-4 shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo or brand name */}
        <h1 className="text-xl lg:text-2xl font-bold lg:ml-12 lg:mr-8">
          <Link to="/">ABC Company</Link>
        </h1>
        
        {/* Desktop navigation menu */}
        <div className="hidden lg:flex flex-1 justify-center">
          <ul className="flex gap-8 text-lg">
            {menuItems.map((item) => (
              <MenuItem key={item.path} {...item} />
            ))}
          </ul>
        </div>

        {/* Language selection dropdown for desktop */}
        <select 
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="hidden lg:block px-3 py-1 ml-8 border rounded-md bg-white hover:border-blue-500 transition duration-300"
        >
          <option value="en">Eng</option>
          <option value="ko">Kor</option>
        </select>

        {/* Mobile menu button */}
        <button
          className="lg:hidden text-2xl"
          onClick={toggleMenu}
          aria-label="Menu"
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile navigation menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white text-black transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } lg:hidden`}
      >
        <div className="p-4">
          <button
            className="text-2xl mb-8 float-right"
            onClick={toggleMenu}
            aria-label="Close"
          >
            <HiX />
          </button>
          <ul className="clear-both space-y-4 pt-8 text-lg">
            {menuItems.map((item) => (
              <MenuItem
                key={item.path}
                {...item}
                onClick={() => {
                  setIsOpen(false);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              />
            ))}
          </ul>
          {/* Language selection for mobile */}
          <select 
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="mt-6 w-full px-3 py-1 border rounded-md bg-white hover:border-blue-500 transition duration-300"
          >
            <option value="en">English</option>
            <option value="ko">Korean</option>
          </select>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
