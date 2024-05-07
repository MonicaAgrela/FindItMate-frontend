import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import { AuthContext } from "../context/auth.context"; // Import AuthContext if not imported

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const { user, isLoggedIn, logOutUser } = useContext(AuthContext);

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center">
              <img
                src="/logo.png"
                alt="logo"
                className="h-8 md:h-6 lg:h-8 xl:h-6"
              />
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <Link
                  to="/"
                  className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Home
                </Link>
                <Link
                  to="/how-it-works"
                  className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                >
                  How It Works
                </Link>
                {isLoggedIn && ( // Only render if user is logged in
                  <Link
                    to="/items"
                    className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Items
                  </Link>
                )}
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded-md inline-block">
                  <a href="/Submit-found-item" className="block text-sm">
                    Submit Found Item
                  </a>
                </button>
                {isLoggedIn ? (
                  <>
                    <span className="text-white">{user.name}</span>
                    <Link to="/dashboard">
                      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded-md inline-block" >My Profile</button>
                    </Link>
                    <button
                      onClick={logOutUser}
                      className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      to="/signup"
                      className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Sign Up
                    </Link>
                    {/* <Link
                      to="/login"
                      className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Login
                    </Link> */}
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="-mr-2 flex sm:hidden">
            <button
              onClick={handleClick}
              className="text-white hover:bg-gray-700 inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
            >
              {click ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <CiMenuFries className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      {click && (
        <div className="sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className="text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </Link>
            <Link
              to="/how-it-works"
              className="text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
            >
              How it works
            </Link>
            {isLoggedIn && ( // Only render if user is logged in
              <Link
                to="/items"
                className="text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
              >
                Items
              </Link>
            )}
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded-md inline-block">
              <a href="/Submit-found-item" className="block text-sm">
                Submit Found Item
              </a>
            </button>
            {isLoggedIn ? (
              <button
                onClick={logOutUser}
                className="text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
              >
                Logout
              </button>
            ) : (
              <>
                <Link
                  to="/signup"
                  className="text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
                >
                  Sign Up
                </Link>
                {/* <Link
                  to="/login"
                  className="text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
                >
                  Login
                </Link> */}
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
