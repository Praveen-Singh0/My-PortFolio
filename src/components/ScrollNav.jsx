/* eslint-disable react/prop-types */
import { useState } from "react";
import { AiFillHome, AiTwotoneInfoCircle, AiFillRead, AiFillFire, AiFillFilePpt, AiFillPhone, } from "react-icons/ai";

const NavLink = ({ text, icon, link, active }) => (
  <a
    href={link}
    className={`flex items-center rounded-md px-3 py-2 text-sm font-medium ${
      active
        ? "bg-gray-900 text-white"
        : "text-gray-900 hover:bg-pink-500 hover:text-white"
    }`}
  >
    {icon}
    {text}
  </a>
);

const MobileNavLink = ({ text, icon, link, active, onClick }) => (
  <a
    href={link}
    className={`flex items-center rounded-md px-3 py-2 text-sm font-medium ${
      active
        ? "bg-gray-900 text-white"
        : "text-gray-700 hover:bg-gray-700 hover:text-white"
    }`}
    onClick={onClick}
  >
    {icon}
    {text}
  </a>
);


const ScrollNav = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [open, setOpen] = useState(true);
  


  return (

    <div className="fixed z-40 w-full">
    <nav className="bg-gray-200 shadow-md">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button */}
            <button
              onClick={() => setOpen(!open)}
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Toggle menu</span>
              {!isMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>

          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              <img
                className="h-10 w-auto rounded-full"
                src="/avatar1.JPG"
                alt="Profile"
              />
            </div>
            <h1 className="ml-2 font-bold sm:hidden">{`Praveen's Portfolio`}</h1>

            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <NavLink
                  text="Home"
                  icon={<AiFillHome className="mr-2" />}
                  link="#home"
                  active
                />
                <NavLink
                  text="About"
                  icon={<AiTwotoneInfoCircle className="mr-2" />}
                  link="#about"
                />
                <NavLink
                  text="Education"
                  icon={<AiFillRead className="mr-2" />}
                  link="#education"
                />
                <NavLink
                  text="Skills"
                  icon={<AiFillFire className="mr-2" />}
                  link="#skills"
                />
                <NavLink
                  text="Projects"
                  icon={<AiFillFilePpt className="mr-2" />}
                  link="#projects"
                />
                <NavLink
                  text="Contact"
                  icon={<AiFillPhone className="mr-2" />}
                  link="#contact"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-16 left-0 right-0 bg-gray-200 transform transition-all duration-500 ease-in-out sm:hidden ${
          open ? "-translate-x-full opacity-0" : "-translate-y-0 opacity-1"
        }`}
      >
        <div className="space-y-1 px-2 pb-3 pt-2">
          <MobileNavLink
            icon={<AiFillHome className="mr-2" />}
            text="Home"
            link="#home"
            active
            onClick={() => setIsMenuOpen(false)}
          />
          <MobileNavLink
            icon={<AiTwotoneInfoCircle className="mr-2" />}
            text="About"
            link="#about"
            onClick={() => setIsMenuOpen(false)}
          />
          <MobileNavLink
            icon={<AiFillRead className="mr-2" />}
            text="Education"
            link="#education"
            onClick={() => setIsMenuOpen(false)}
          />
          <MobileNavLink
            icon={<AiFillFire className="mr-2" />}
            text="Skills"
            link="#skills"
            onClick={() => setIsMenuOpen(false)}
          />
          <MobileNavLink
            icon={<AiFillFilePpt className="mr-2" />}
            text="Projects"
            link="#projects"
            onClick={() => setIsMenuOpen(false)}
          />
          <MobileNavLink
            icon={<AiFillPhone className="mr-2" />}
            text="Contact"
            link="#contact"
            onClick={() => setIsMenuOpen(false)}
          />
        </div>
      </div>
    </nav>
  </div>
  );
};

export default ScrollNav