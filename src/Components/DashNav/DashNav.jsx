import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth/useAuth";

const DashNav = () => {
  const { userSignOut } = useAuth();
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
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link to={"/dashboard/"}>Dashboard</Link>
      </li>
      <li>
        <Link to={"/dashboard/createTask"}>Create Task</Link>
      </li>
      <li>
        <Link to={"/dashboard/tasks"}>Tasks</Link>
      </li>
      <li>
        <a onClick={handleLogOut} className="text-white bg-red-500">
          Logout
        </a>
      </li>
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

export default DashNav;
