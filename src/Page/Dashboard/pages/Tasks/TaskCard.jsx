import { FaList, FaPencil, FaTrash } from "react-icons/fa6";
import Swal from "sweetalert2";
import { axiosPublic } from "../../../../Components/hooks/useAxiosPublic/useAxiosPublic";
import useTodoTask from "../../../../Components/hooks/useTodoTask/useTodoTask";
import useOngoingTask from "../../../../Components/hooks/useOngoingTask/useOngoingTask";
import useCompletedTask from "../../../../Components/hooks/useCompletedTask/useCompletedTask";

const TaskCard = ({ task }) => {
  const {
    task_name,
    task_details,
    task_deadline_date,
    task_deadline_time,
    task_priority,
    task_status,
    _id,
  } = task;

  const { todoRefetch } = useTodoTask();
  const { ongoingRefetch } = useOngoingTask();
  const { completedRefetch } = useCompletedTask();

  const handleDragStart = (e, id) => {
    e.dataTransfer.setData("id", id);
  };

  const handleTodoTask = (id) => {
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
  const handleOngoingTask = (id) => {
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
  const handleCompletedTask = (id) => {
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


  const handleTaskDelete = (id) => {
    axiosPublic.delete(`/deleteTask/${id}`).then((res) => {
        if (res.data.modifiedCount > 0) {
          completedRefetch();
          todoRefetch();
          ongoingRefetch();
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your task has been deleted",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  }

  return (
    <div
      draggable
      onDragStart={(e) => handleDragStart(e, _id)}
      className={
        task_status === "Ongoing"
          ? "card bg-yellow-200 shadow-2xl shadow-yellow-100 font-semibold image-full cursor-move"
          : task_status === "To-do"
          ? "card bg-cyan-200 shadow-2xl shadow-cyan-100 font-semibold image-full cursor-move"
          : task_status === "Completed"
          ? "card bg-lime-200 shadow-2xl shadow-lime-100 font-semibold image-full cursor-move"
          : ""
      }
    >
      <div className="card-body">
        <div className="flex flex-col">
          <h2 className="text-xl font-bold flex-grow uppercase">{task_name}</h2>
          <p className=" flex-grow">
            <span className="text-lg">Details</span>: {task_details}
          </p>
          <hr />
          <p>
            <span className="text-lg">Deadline Date</span>:{" "}
            <span className="font-bold">{task_deadline_date}</span>
          </p>
          <p>
            <span className="text-lg">Deadline Time</span>:{" "}
            <span className="font-bold">{task_deadline_time}</span>
          </p>
          <hr />
          <div className="flex flex-row justify-evenly items-center">
            <p>
              <span className="text-lg">Priority</span>:{" "}
              <span className="font-bold">{task_priority}</span>
            </p>
            <p>
              <span className="text-lg">Status</span>:{" "}
              <span className="font-bold">{task_status}</span>
            </p>
          </div>
          <hr />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 items-center mt-2 lg:hidden">
            <button
              onClick={() => handleTodoTask(_id)}
              disabled={task_status === "To-do"}
              className="flex w-full justify-center items-center btn-sm gap-2 btn glass bg-cyan-600 hover:bg-cyan-800 text-lg text-white"
            >
              <FaList />
              To-do
            </button>
            <button
              onClick={() => handleOngoingTask(_id)}
              disabled={task_status === "Ongoing"}
              className="flex w-full justify-center items-center btn-sm gap-2 btn glass bg-yellow-600 hover:bg-yellow-900 text-lg text-white"
            >
              <FaTrash />
              Ongoing
            </button>
            <button
              onClick={() => handleCompletedTask(_id)}
              disabled={task_status === "Completed"}
              className="flex col-span-1 md:col-span-2 w-full justify-center items-center btn-sm gap-2 btn glass bg-lime-600 hover:bg-lime-900 text-lg text-white"
            >
              <FaTrash />
              Completed
            </button>
          </div>

          <div className="flex justify-around items-center mt-2">
            <button className="flex justify-center items-center btn-sm gap-2 btn glass bg-emerald-600 hover:bg-emerald-800 text-lg text-white">
              <FaPencil />
              Edit
            </button>
            <button onClick={()=>handleTaskDelete(_id)} className="flex justify-center items-center btn-sm gap-2 btn glass bg-red-600 hover:bg-red-900 text-lg text-white">
              <FaTrash />
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
