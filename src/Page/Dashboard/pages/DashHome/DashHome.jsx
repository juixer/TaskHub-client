import { Link } from "react-router-dom";
import useAuth from "../../../../Components/hooks/useAuth/useAuth";
import { FaCheck, FaClock, FaList, FaRegCirclePlay } from "react-icons/fa6";
import { useQuery } from "@tanstack/react-query";
import { ClockLoader } from "react-spinners";
import { axiosPublic } from "../../../../Components/hooks/useAxiosPublic/useAxiosPublic";

const DashHome = () => {
  const { user } = useAuth();

  const { isPending, error, data : count = {} } = useQuery({
    queryKey: ["counter"],
    queryFn: async () => {
    const res = await  axiosPublic.get(`/getCount/${user.email}`)
    return res.data
    }
      
  });

  if (isPending) {
    return (
      <div className="flex justify-center items-center py-44">
        <ClockLoader color="#36b0d6" />
      </div>
    );
  }

  if (error) {
    return console.log(error.message);
  }
  return (
    <div className="flex justify-center items-center gap-5 flex-col box">
      <img className="mask mask-circle w-44" src={user?.photoURL} />
      <h1 className="text-3xl font-bold text-center">{user?.displayName}</h1>
      <Link to={"/editProfile"}>
        <button className="btn glass bg-cyan-600 hover:bg-cyan-800  text-white w-full text-lg font-bold">
          Edit Profile
        </button>
      </Link>
      <div className="flex justify-center items-center flex-col md:flex-row gap-5">
        <h1 className="text-lg font-bold flex justify-center items-center gap-1">
          <FaList /> Total Tasks : <span className="text-sky-500">{count.taskCountResult}</span>
        </h1>
        <h1 className="text-lg font-bold flex justify-center items-center gap-1">
          <FaRegCirclePlay /> To-do: <span className="text-orange-500">{count.todoCountResult}</span>
        </h1>
        <h1 className="text-lg font-bold flex justify-center items-center gap-1">
          <FaClock /> Ongoing: <span className="text-orange-500">{count.ongoingCountResult}</span>
        </h1>
        <h1 className="text-lg font-bold flex justify-center items-center gap-1">
          <FaCheck /> Completed:{" "}
          <span className="text-lime-500">{count.completedCountResult}</span>
        </h1>
      </div>
      <div className="flex justify-center items-center gap-5 flex-col md:flex-row">
        <Link to={"/dashboard/createTask"}>
          <button className="btn glass bg-lime-600 hover:bg-lime-800  text-white w-full text-lg font-bold">
            Create Task
          </button>
        </Link>
        <Link to={"/dashboard/tasks"}>
          <button className="btn glass bg-cyan-600 hover:bg-cyan-800  text-white w-full text-lg font-bold">
            Tasks
          </button>
        </Link>
      </div>
    </div>
  );
};

export default DashHome;
