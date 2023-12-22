import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Page/Home/Home";
import Login from "../Page/Login/Login";
import Register from "../Page/Register/Register";
import Dashboard from "../Page/Dashboard/Dashboard";
import DashHome from "../Page/Dashboard/pages/DashHome/DashHome";
import PrivateRoute from "./PrivateRoute";
import CreateTask from "../Page/Dashboard/pages/CreateTask/CreateTask";
import Tasks from "../Page/Dashboard/pages/Tasks/Tasks";
import EditTask from "../Page/Dashboard/pages/EditTask/EditTask";
import EditProfile from "../Page/Dashboard/pages/EditProfile/Editprofile";
import ErrorPage from "../Page/ErrorPage/ErrorPage";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/editProfile",
        element: (
          <PrivateRoute>
            <EditProfile />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/dashboard/",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/dashboard/",
        element: (
          <PrivateRoute>
            <DashHome />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/createTask",
        element: (
          <PrivateRoute>
            <CreateTask />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/tasks",
        element: (
          <PrivateRoute>
            <Tasks />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/editTask/:id",
        element: (
          <PrivateRoute>
            <EditTask />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://task-management-server-eta-three.vercel.app/editTask/${params.id}`
          ),
      },
    ],
  },
]);

export default Router;
