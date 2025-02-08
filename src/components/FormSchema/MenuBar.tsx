import React, { useState } from "react";

const MenuBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      {/* Hamburger Icon */}
      <button
        onClick={toggleMenu}
        className="flex flex-col justify-between w-8 h-6 focus:outline-none"
      >
        {!isOpen ? (
          // Hamburger Menu
          <>
            <span className="block w-full h-1 bg-black rounded"></span>
            <span className="block w-full h-1 bg-black rounded"></span>
            <span className="block w-full h-1 bg-black rounded"></span>
          </>
        ) : (
          // X Icon
          <div className="w-full h-full flex justify-center items-center">
            <span className="absolute block w-full h-1 bg-black rotate-45 transform"></span>
            <span className="absolute block w-full h-1 bg-black -rotate-45 transform"></span>
          </div>
        )}
      </button>

      {/* Menu Items */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2">
          <a href="#" className="block px-4 py-2 hover:bg-gray-100">
            Home
          </a>
          <a href="#" className="block px-4 py-2 hover:bg-gray-100">
            About Us
          </a>
          <a href="#" className="block px-4 py-2 hover:bg-gray-100">
            Contact
          </a>
        </div>
      )}
    </div>
  );
};

export default MenuBar;
