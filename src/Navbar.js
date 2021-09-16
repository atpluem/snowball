import React, { useState } from "react";

function Navbar() {
  const menuBtn = document.querySelector('.menu-btn');
  const menu = document.querySelector('.mobile-menu');
  let menuOpen = false;

  if (menuBtn) {
    menuBtn.addEventListener('click', () => {
      if (!menuOpen) {
        menuBtn.classList.add('open');
        menu.classList.remove('hidden');
        menuOpen = true;
      } else {
        menuBtn.classList.remove('open');
        menu.classList.add('hidden');
        menuOpen = false;
      }
    });
  }

  return (
    <>
      <nav className="bg-tanly">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between py-2 px-3">
            {/* Logo */}
            <div className="flex items-center">
              <a href="#" className="flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                </svg>
                <span>SNOWBALL</span>
              </a>
            </div>

            <div className="hidden md:flex space-x-4 items-center">
              <a href="#" className="hidden md:block py-2 px-3 text-gray-700">Home</a>
              <a href="#" className="hidden md:block py-2 px-3 text-gray-700">Gadget</a>
              <a href="#" className="hidden md:block py-2 px-3 text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </a>
            </div>

            <div className="md:hidden flex item-center">
              <div className="menu-btn">
                <div className="menu-btn__burger">
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Mobile menus */}

        <div className="mobile-menu hidden md:hidden">
          <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-900">Home</a>
          <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-900">Gadget</a>
        </div>

      </nav>

      <style jsx>{`
        .menu-btn {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 60px;
          height: 60px;
          cursor: pointer;
          transition: all .5s ease-in-out;
        }
        .menu-btn__burger {
          width: 40px;
          height: 5px;
          background: #fff;
          border-radius: 5px;
          box-shadow: 0 2px 5px rgba(255, 101, 47, .2);
          transition: all .3s ease-in-out;
        }
        .menu-btn__burger::before,
        .menu-btn__burger::after {
          content: '';
          position: absolute;
          width: 40px;
          height: 5px;
          background: #fff;
          border-radius: 5px;
          box-shadow: 0 2px 5px rgba(255, 101, 47, .2);
          transition: all .3s ease-in-out;
        }
        .menu-btn__burger::before {
          transform: translateY(-16px);
        }
        .menu-btn__burger::after {
          transform: translateY(16px);
        }

        /* ANIMATION */
        .menu-btn.open .menu-btn__burger {
          transform: translateX(-50px);
          background: transparent;
          box-shadow: none;
        }
        .menu-btn.open .menu-btn__burger::before {
          transform: rotate(45deg) translate(35px, -35px);
        }
        .menu-btn.open .menu-btn__burger::after {
          transform: rotate(-45deg) translate(35px, 35px);
        }
      `}
      </style>
    </>
  );
}

export default Navbar;