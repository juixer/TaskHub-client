import { ClockLoader } from "react-spinners";
import useOngoingTask from "../../../../Components/hooks/useOngoingTask/useOngoingTask";
import TaskCard from "./TaskCard";

const Tasks = () => {
  const { ongoingPending, ongoingErr, ongoingTasks } = useOngoingTask();
  if (ongoingPending) {
    return (
      <div className="flex justify-center items-center py-44">
        <ClockLoader color="#36b0d6" />
      </div>
    );
  }

  if (ongoingErr) {
    return console.log(ongoingErr.message);
  }
  return (
    <div>
      <h1 className="text-5xl font-bold text-center">Your Tasks</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">

        <div className="border-2 rounded-xl shadow-xl shadow-cyan-200 p-5">
          <h1 className="text-3xl font-bold text-center mb-2">
            To-DO
          </h1>
          <hr className="mx-3" />
          <div className="grid grid-cols-1 gap-5 mt-3">
            {ongoingTasks.map((ongoing) => {
              return <TaskCard key={ongoing._id} task={ongoing} />;
            })}
          </div>
        </div>

        <div className="border-2 rounded-xl shadow-xl shadow-yellow-200 p-5">
          <h1 className="text-3xl font-bold text-center mb-2">Ongoing Tasks</h1>
          <hr className="mx-3" />
          <div className="grid grid-cols-1 gap-5 mt-3">
            {ongoingTasks.map((ongoing) => {
              return <TaskCard key={ongoing._id} task={ongoing} />;
            })}
          </div>
        </div>

        <div className="border-2 rounded-xl shadow-xl shadow-lime-200 p-5">
          <h1 className="text-3xl font-bold text-center mb-2">
            Completed Tasks
          </h1>
          <hr className="mx-3" />
          <div className="grid grid-cols-1 gap-5 mt-3">
            {ongoingTasks.map((ongoing) => {
              return <TaskCard key={ongoing._id} task={ongoing} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tasks;
