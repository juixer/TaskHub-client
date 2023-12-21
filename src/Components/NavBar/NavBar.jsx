import { Link, NavLink, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth/useAuth";
import Swal from "sweetalert2";

const NavBar = () => {
  const { user, userSignOut } = useAuth();
  const navigate = useNavigate();
  const handleLogOut = () => {
    userSignOut()
      .then(() => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Logged out successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      })
      .catch((err) => {
        Swal.fire({
          position: "center",
          icon: "error",
          title: `${err.message}`,
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };
  const NavLinks = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/dashboard"}>Dashboard</NavLink>
      </li>
      <li>
        <NavLink to={"/feedback"}>Feedback</NavLink>
      </li>
      {user ? (
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img src={user.photoURL} />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] text-black p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="text-gray-600">{user.displayName}</a>
              <a className="text-gray-600">{user.email}</a>
            </li>
            <hr />
            <li>
              <a onClick={handleLogOut}>Logout</a>
            </li>
          </ul>
        </div>
      ) : (
        <li>
          <Link to={"/login"}>
            <button className="btn font-bold btn-sm glass hover:bg-red-800 bg-red-600 text-white">
              Log In
            </button>
          </Link>
        </li>
      )}
    </>
  );
  return (
    <div className="bg-black bg-opacity-50">
      <div className="drawer z-50 max-w-screen-2xl mx-auto">
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
          <ul className="menu p-4 w-60 min-h-full bg-base-200">{NavLinks}</ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
