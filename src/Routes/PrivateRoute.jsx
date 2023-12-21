import { ClockLoader } from "react-spinners";
import useAuth from "../Components/hooks/useAuth/useAuth";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();

  const location = useLocation();
  
  if (loading) {
    return (
      <div className="flex justify-center items-center py-44">
        <ClockLoader color="#36b0d6" />
      </div>
    );
  }

  if (!user) {
    return <Navigate  state={location.pathname} to={"/login"}></Navigate>;
  }

  return children;
};

export default PrivateRoute;
