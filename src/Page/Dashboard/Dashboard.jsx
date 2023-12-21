import { Outlet } from "react-router-dom";
import DashNav from "../../Components/DashNav/DashNav";

const Dashboard = () => {
  return (
    <div>
      <DashNav />
      <div className="max-w-screen-2xl mt-5 mx-auto px-3">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
