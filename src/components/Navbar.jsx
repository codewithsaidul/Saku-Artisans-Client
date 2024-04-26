import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="artsContainer py-5">
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
                      ? "text-primary border-b font-semibold  border-primary text-lg"
                      : "text-gray-400 font-normal text-base"
                  }
                >
                  Home
                </NavLink>

                <NavLink
                  to="/allCraftsItem"
                  className={({ isActive }) =>
                    isActive
                      ? "text-primary border-b font-semibold  border-primary text-lg"
                      : "text-gray-400 font-normal text-base"
                  }
                >
                  All Crafts Item
                </NavLink>

                <NavLink
                  to="/addCraftsItem"
                  className={({ isActive }) =>
                    isActive
                      ? "text-primary border-b font-semibold  border-primary text-lg"
                      : "text-gray-400 font-normal text-base"
                  }
                >
                  Add Crafts Item
                </NavLink>

                <NavLink
                  to="/myCraftsList"
                  className={({ isActive }) =>
                    isActive
                      ? "text-primary border-b font-semibold  border-primary text-lg"
                      : "text-gray-400 font-normal text-base"
                  }
                >
                  My Crafts List
                </NavLink>
              </ul>
            </div>

            <Link
              to="/"
              className="text-primary text-base font-bold md:text-3xl"
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
                    ? "text-primary border-b font-semibold  border-primary text-lg"
                    : "text-gray-400 font-normal text-base"
                }
              >
                Home
              </NavLink>

              <NavLink
                to="/allCraftsItem"
                className={({ isActive }) =>
                  isActive
                    ? "text-primary border-b font-semibold  border-primary text-lg"
                    : "text-gray-400 font-normal text-base"
                }
              >
                All Crafts Item
              </NavLink>

              <NavLink
                to="/addCraftsItem"
                className={({ isActive }) =>
                  isActive
                    ? "text-primary border-b font-semibold  border-primary text-lg"
                    : "text-gray-400 font-normal text-base"
                }
              >
                Add Crafts Item
              </NavLink>

              <NavLink
                to="/myCraftsList"
                className={({ isActive }) =>
                  isActive
                    ? "text-primary border-b font-semibold  border-primary text-lg"
                    : "text-gray-400 font-normal text-base"
                }
              >
                My Crafts List
              </NavLink>
            </ul>
          </div>

          {/* Navbar End */}
          <div className="navbar-end">
            <Link
              to="/login"
              className="py-2 px-2 md:py-3 md:px-5 bg-transparent border border-primary text-black hover:text-white hover:bg-primary hover:border duration-700 hover:duration-700 text-lg rounded-lg"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="py-2 px-2 md:py-3 md:px-5 bg-transparent border border-primary text-black hover:text-white hover:bg-primary hover:border duration-700 hover:duration-700 text-lg rounded-lg ml-2"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
