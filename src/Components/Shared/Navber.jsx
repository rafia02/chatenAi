import React, { useContext, useState } from "react";
import { Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import Login from "./Login";
import { context } from "../../Context/AuthContex";

const Navber = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useContext(context);
  console.log(user?.email);


  const handleLogout = () => {
    logout()
        .then(() => { })
        .catch(e => console.error(e))
}

  return (
    <nav className="px-4">
      <div className="py-3 md:py-5 ">
        <div className="justify-between w-full flex  h-16">
          <div className="flex items-center justify-between w-full sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-full text-white bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <XIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <MenuIcon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
          <div className=" flex items-center justify-end w-full md:justify-between ">
            <Link to="/">
              <img
                className="h-7 w-full md:h-9"
                src="https://chatenai-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.4f98a1d7.png&w=640&q=75"
                alt=""
              />
            </Link>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-10">
                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-medium"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-medium"
                >
                  About
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-medium"
                >
                  Services
                </a>
                {user?.email ? (
                  <Link onClick={handleLogout} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-medium">
                    Logout
                  </Link>
                ) : (
                  <Link
                    to="/login"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-medium"
                  >
                    Log in
                  </Link>
                )}
                {/* <Link to="/login" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-medium">Log in</Link> */}
                <button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-400 px-3 rounded-full font-medium text-gray-50">
                <Link to={`${user?.email ? "/workspace" : "/login"}`}>Get Started free</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-200 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {(ref) => (
          <div className="sm:hidden " id="mobile-menu">
            <div ref={ref} className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                About
              </a>
              <a
                href="#"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Services
              </a>
              {user?.email ? (
                  <Link onClick={handleLogout} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-medium">
                    Logout
                  </Link>
                ) : (
                  <Link
                    to="/login"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-medium"
                  >
                    Log in
                  </Link>
                )}
            </div>
          </div>
        )}
      </Transition>
    </nav>
  );
};

export default Navber;
