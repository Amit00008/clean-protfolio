import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-darkBg text-textPrimary py-4 px-10">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo Section */}
        <div className="text-2xl font-extrabold text-primary">
          Amit
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden text-3xl cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Navigation Links - Desktop */}
        <ul className="hidden md:flex space-x-8 text-lg font-medium">
          <li>
            <a href="#about" className="hover:text-primary transition-colors">
              About
            </a>
          </li>
          <li>
            <a href="#experience" className="hover:text-primary transition-colors">
              Experience
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-primary transition-colors">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-primary transition-colors">
              Contact
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col space-y-4 text-lg font-medium mt-4">
          <li>
            <a href="#" className="block text-center hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>
              About
            </a>
          </li>
          <li>
            <a href="#experience" className="block text-center hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>
              Experience
            </a>
          </li>
          <li>
            <a href="#projects" className="block text-center hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="block text-center hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>
              Contact
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
