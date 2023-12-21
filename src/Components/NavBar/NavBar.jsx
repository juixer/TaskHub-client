import { NavLink } from "react-router-dom";

const NavBar = () => {
  const NavLinks = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/dashboard"}>Dashboard</NavLink>
      </li>
      <li>
        <NavLink to={"/profile"}>Profile</NavLink>
      </li>
      <li>
        <NavLink to={"/feedback"}>Feedback</NavLink>
      </li>
      <li>
        <NavLink to={"/login"}>
          <button className="btn font-bold btn-sm glass hover:bg-red-800 bg-red-600 text-white">
            Log In
          </button>
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="bg-black bg-opacity-50">
      <div className="drawer max-w-screen-2xl mx-auto">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="w-full navbar ">
            <div className="flex-none lg:hidden">
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="flex-1 px-2 mx-2 text-2xl text-white font-bold">
             My Todo<span className="text-red-500">Hub</span>
            </div>
            <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal text-xl font-semibold text-white space-x-3">
                {NavLinks}
              </ul>
            </div>
          </div>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-60 min-h-full bg-base-200">
          {NavLinks}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
