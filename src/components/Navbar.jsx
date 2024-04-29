import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { Tooltip } from "react-tooltip";

const Navbar = () => {


  const { user, loggedOutUser } = useAuth();

  const localTheme = localStorage.getItem("theme");
  const [theme, setTheme] = useState(localTheme || 'light');


  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.querySelector('html').setAttribute('data-theme', theme);
  }, [theme])


  const handleTheme = e => {
    const newTheme = e.target.checked ? 'dark' : 'light';
    setTheme(newTheme)
  }

  const handleLogOut = () => {
    loggedOutUser();
  }

  return (
    <div>
      <div className="artsContainer py-5 relative">
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>

              <ul
                tabIndex={0}
                className="flex flex-col items-center gap-5 dropdown-content mt-3 z-[1] p-5 shadow bg-base-100 rounded-box w-52"
              >
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "text-primary font-title border-b font-semibold  border-primary text-2xl"
                      : "text-gray-400 font-normal text-base"
                  }
                >
                  Home
                </NavLink>

                <NavLink
                  to="/allCraftsItem"
                  className={({ isActive }) =>
                    isActive
                      ? "text-primary font-title border-b font-semibold  border-primary text-2xl"
                      : "text-gray-400 font-normal text-base"
                  }
                >
                  All Crafts Item
                </NavLink>

                <NavLink
                  to="/addCraftsItem"
                  className={({ isActive }) =>
                    isActive
                      ? "text-primary font-title border-b font-semibold  border-primary text-2xl"
                      : "text-gray-400 font-normal text-base"
                  }
                >
                  Add Crafts Item
                </NavLink>

                <NavLink
                  to="/myCraftsList"
                  className={({ isActive }) =>
                    isActive
                      ? "text-primary font-title border-b font-semibold  border-primary text-2xl"
                      : "text-gray-400 font-normal text-base"
                  }
                >
                  My Crafts List
                </NavLink>
              </ul>
            </div>

            <Link
              to="/"
              className="text-primary text-lg min-[360px]:text-2xl min-[390px]:text-3xl font-title font-bold md:text-5xl"
            >
              SakuArtisans
            </Link>
          </div>

          {/* Navbar Center */}
          <div className="navbar-center hidden lg:flex">
            <ul className="flex items-center gap-8">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-primary font-title border-b font-semibold  border-primary text-2xl"
                    : "text-gray-400 font-normal text-base"
                }
              >
                Home
              </NavLink>

              <NavLink
                to="/allCraftsItem"
                className={({ isActive }) =>
                  isActive
                    ? "text-primary font-title border-b font-semibold  border-primary text-2xl"
                    : "text-gray-400 font-normal text-base"
                }
              >
                All Crafts Item
              </NavLink>

              <NavLink
                to="/addCraftsItem"
                className={({ isActive }) =>
                  isActive
                    ? "text-primary font-title border-b font-semibold  border-primary text-2xl"
                    : "text-gray-400 font-normal text-base"
                }
              >
                Add Crafts Item
              </NavLink>

              <NavLink
                to="/myCraftsList"
                className={({ isActive }) =>
                  isActive
                    ? "text-primary font-title border-b font-semibold  border-primary text-2xl"
                    : "text-gray-400 font-normal text-base"
                }
              >
                My Crafts List
              </NavLink>
            </ul>
          </div>

          {/* Navbar End */}
          <div className="navbar-end">
            {user?.photoURL ? (
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div
                    className="w-10 rounded-full"
                    data-tooltip-id="my-tooltip"
                    data-tooltip-place="left"
                    data-tooltip-content={user.displayName}
                  >
                    <img
                      alt="Tailwind CSS Navbar component"
                      src={user.photoURL}
                    />
                    <Tooltip id="my-tooltip" />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="flex flex-col gap-5 items-end justify-end dropdown-content mt-3 z-[100] p-2 shadow bg-base-100 rounded-box w-32"
                >
                  <li>
                    <a>Profile</a>
                  </li>
                  <li>
                    <button onClick={handleLogOut}>Logout</button>
                  </li>
                </ul>
              </div>
            ) : (
              <div>
                <Link
                  to="/login"
                  className="py-2 px-2 md:py-3 md:px-5 bg-transparent border border-primary dark:text-rose-400 hover:text-white hover:bg-primary hover:border duration-700 hover:duration-700 text-lg rounded-lg"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="py-2 px-2 md:py-3 md:px-5 bg-transparent border border-primary  dark:text-white hover:text-white hover:bg-primary hover:border duration-700 hover:duration-700 text-lg rounded-lg ml-2"
                >
                  Register
                </Link>
              </div>
            )}

            {/* theme controler */}
            <div className="fixed top-24 right-0 bg-white z-50  shadow-custom py-2 px-7 rounded flex justify-center items-center">
              <label onChange={handleTheme} className="swap swap-rotate">
                {/* this hidden checkbox controls the state */}
                <input
                  type="checkbox"
                  className="theme-controller"
                  defaultChecked={theme === "dark"}
                />

                {/* sun icon */}
                <svg
                  className="swap-off fill-current w-10 h-10"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                </svg>

                {/* moon icon */}
                <svg
                  className="swap-on fill-current w-10 h-10"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                </svg>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
