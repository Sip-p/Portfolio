import React, { useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State to toggle menu visibility

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle the menu state
  };

  return (
    <div id='Navbar' className='flex bg-black text-white justify-between pt-4 px-2 lg:p-4 md:p-2 sm:p-2'>
      <h1 className='font-bold lg:text-3xl bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent'>
        Sipra
      </h1>

      {/* Hamburger Icon for small screens */}
      <div className="sm:hidden flex items-center">
        <button onClick={toggleMenu} className="text-white text-3xl">
          {menuOpen ? '×' : '≡'}  
        </button>
      </div>

      {/* Menu items for larger screens */}
      <ul className={`lg:flex lg:justify-evenly lg:gap-4 md:flex md:flex-row md:gap-4 sm:flex sm:flex-row sm:gap-1 ${menuOpen ? 'block' : 'hidden'} lg:block`}>
        <li>
          <AnchorLink href='#App'>
            <button className='hover:scale-125' onClick={() => setMenuOpen(false)}>
              Home
            </button>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink href='#AboutMe'>
            <button className='hover:scale-125' onClick={() => setMenuOpen(false)}>
              About Me
            </button>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink href='#Services'>
            <button className='hover:scale-125' onClick={() => setMenuOpen(false)}>
              Services
            </button>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink href='#Portfolio'>
            <button className='hover:scale-125' onClick={() => setMenuOpen(false)}>
              Portfolio
            </button>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink href='#Contact'>
            <button className='hover:scale-125' onClick={() => setMenuOpen(false)}>
              Contact
            </button>
          </AnchorLink>
        </li>
      </ul>

      {/* Contact button, which will be shown on all screen sizes */}
      <h1 className='hover:text-black hover:cursor-pointer bg-gradient-to-r from-pink-500 to-orange-500 lg:px-2 md:px-2 sm:px-4 rounded-md'>
        <AnchorLink href='#Contact'>Contact With Me</AnchorLink>
      </h1>
    </div>
  );
};

export default Navbar;
