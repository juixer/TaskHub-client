import { Link } from "react-router-dom";
import useAuth from "../../../../Components/hooks/useAuth/useAuth";
import { FaCheck, FaClock, FaList } from "react-icons/fa6";

const DashHome = () => {
  const { user } = useAuth();
  return (
    <div className="flex justify-center items-center gap-5 flex-col box">
      <img className="mask mask-hexagon w-44" src={user?.photoURL} />
      <h1 className="text-3xl font-bold text-center">{user?.displayName}</h1>
      <Link to={"/editProfile"}>
        <button className="btn glass bg-cyan-600 hover:bg-cyan-800  text-white w-full text-lg font-bold">
          Edit Profile
        </button>
      </Link>
      <div className="flex justify-center items-center flex-col md:flex-row gap-5">
        <h1 className="text-lg font-bold flex justify-center items-center gap-1">
          <FaList /> Total Tasks : <span className="text-sky-500">69</span>
        </h1>
        <h1 className="text-lg font-bold flex justify-center items-center gap-1">
          <FaClock /> Ongoing Tasks : <span className="text-orange-500">9</span>
        </h1>
        <h1 className="text-lg font-bold flex justify-center items-center gap-1">
          <FaCheck /> Completed Tasks :{" "}
          <span className="text-lime-500">60</span>
        </h1>
      </div>
      <div className="flex justify-center items-center gap-5 flex-col md:flex-row">
        <Link to={"/createTask"}>
          <button className="btn glass bg-lime-600 hover:bg-lime-800  text-white w-full text-lg font-bold">
            Create Task
          </button>
        </Link>
        <Link to={"/tasks"}>
          <button className="btn glass bg-cyan-600 hover:bg-cyan-800  text-white w-full text-lg font-bold">
            Tasks
          </button>
        </Link>
      </div>
    </div>
  );
};

export default DashHome;
