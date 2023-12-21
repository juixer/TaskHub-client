
const TaskCard = ({ task }) => {
  const {
    task_name,
    task_details,
    task_deadline_date,
    task_deadline_time,
    task_priority,
    task_status,
    _id
  } = task;

 const handleDragStart =(e,id) => {
    console.log('drag started', id);
    e.dataTransfer.setData("id", id)
 }
  return (
    <div
    draggable
    onDragStart={(e)=>handleDragStart(e,_id)}
      className={
        task_status === "Ongoing"
          ? "card bg-yellow-200 shadow-xl font-semibold image-full cursor-move"
          : task_status === "To-do"
          ? "card bg-cyan-200 shadow-xl font-semibold image-full cursor-move"
          : task_status === "Completed"
          ? "card bg-lime-200 shadow-xl font-semibold image-full cursor-move"
          : ""
      }
    >
      <div className="card-body">
        <h2 className="card-title">{task_name}</h2>
        <p>{task_details}</p>
        <p>
          Deadline Date: <span className="font-bold">{task_deadline_date}</span>
        </p>
        <p>
          Deadline Time: <span className="font-bold">{task_deadline_time}</span>
        </p>
        <div className="flex flex-row justify-evenly items-center">
          <p>
            Task Priority: <span className="font-bold">{task_priority}</span>
          </p>
          <p>
            Task Status: <span className="font-bold">{task_status}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
