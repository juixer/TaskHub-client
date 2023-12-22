import { ClockLoader } from "react-spinners";
import useOngoingTask from "../../../../Components/hooks/useOngoingTask/useOngoingTask";
import TaskCard from "./TaskCard";
import useTodoTask from "../../../../Components/hooks/useTodoTask/useTodoTask";
import useCompletedTask from "../../../../Components/hooks/useCompletedTask/useCompletedTask";
import { axiosPublic } from "../../../../Components/hooks/useAxiosPublic/useAxiosPublic";
import Swal from "sweetalert2";
import UseHelmet from "../../../../Components/hooks/useHelmet/UseHelmet";
import { motion } from "framer-motion";

const Tasks = () => {
  const { ongoingPending, ongoingErr, ongoingTasks, ongoingRefetch } =
    useOngoingTask();
  const { todoPending, todoErr, todoTasks, todoRefetch } = useTodoTask();
  const { completedPending, completedErr, completedTasks, completedRefetch } =
    useCompletedTask();
  if (todoPending) {
    return (
      <div className="flex justify-center items-center py-44">
        <ClockLoader color="#36b0d6" />
      </div>
    );
  }

  if (todoErr) {
    return console.log(ongoingErr.message);
  }

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

  if (completedPending) {
    return (
      <div className="flex justify-center items-center py-44">
        <ClockLoader color="#36b0d6" />
      </div>
    );
  }

  if (completedErr) {
    return console.log(ongoingErr.message);
  }

  const handleTodoDragOver = (e) => {
    e.preventDefault();
  };

  const handleTodoDrop = (e) => {
    let id = e.dataTransfer.getData("id");
    axiosPublic.patch(`/makeTodoTask/${id}`).then((res) => {
      if (res.data.modifiedCount > 0) {
        completedRefetch();
        todoRefetch();
        ongoingRefetch();
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your task is dropped in To-do progress",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  const handleOngoingDragOver = (e) => {
    e.preventDefault();
  };

  const handleOngoingDrop = (e) => {
    let id = e.dataTransfer.getData("id");
    axiosPublic.patch(`/makeOngoingTask/${id}`).then((res) => {
      if (res.data.modifiedCount > 0) {
        completedRefetch();
        todoRefetch();
        ongoingRefetch();
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your task is dropped in Ongoing progress",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  const handleCompletedDragOver = (e) => {
    e.preventDefault();
  };

  const handleCompletedDrop = (e) => {
    let id = e.dataTransfer.getData("id");
    axiosPublic.patch(`/makeCompletedTask/${id}`).then((res) => {
      if (res.data.modifiedCount > 0) {
        completedRefetch();
        todoRefetch();
        ongoingRefetch();
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your task is dropped in Completed progress",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };
  return (
    <motion.div  initial={{width: 0}} 
    animate={{width: "100%"}}
    exit={{x: window.innerWidth}}>
      <UseHelmet title={'Tasks'}/>
      <h1 className="text-5xl font-bold text-center">Your Tasks</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
        <div
          onDragOver={(e) => handleTodoDragOver(e)}
          onDrop={(e) => handleTodoDrop(e)}
          className="border-2 rounded-xl shadow-xl shadow-cyan-100 p-5"
        >
          <h1 className="text-3xl font-bold text-center mb-2">To-DO</h1>
          <hr className="mx-3" />
          <div className="grid grid-cols-1 gap-5 mt-3">
            {todoTasks.map((todo) => {
              return <TaskCard key={todo._id} task={todo} />;
            })}
          </div>
        </div>

        <div
          onDragOver={(e) => handleOngoingDragOver(e)}
          onDrop={(e) => handleOngoingDrop(e)}
          className="border-2 rounded-xl shadow-xl shadow-yellow-100 p-5"
        >
          <h1 className="text-3xl font-bold text-center mb-2">Ongoing</h1>
          <hr className="mx-3" />
          <div className="grid grid-cols-1 gap-5 mt-3">
            {ongoingTasks.map((ongoing) => {
              return <TaskCard key={ongoing._id} task={ongoing} />;
            })}
          </div>
        </div>

        <div
          onDragOver={(e) => handleCompletedDragOver(e)}
          onDrop={(e) => handleCompletedDrop(e)}
          className="border-2 rounded-xl shadow-xl shadow-lime-100 p-5"
        >
          <h1 className="text-3xl font-bold text-center mb-2">
            Completed
          </h1>
          <hr className="mx-3" />
          <div className="grid grid-cols-1 gap-5 mt-3">
            {completedTasks.map((completed) => {
              return <TaskCard key={completed._id} task={completed} />;
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Tasks;
