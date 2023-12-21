const TaskCard = ({task}) => {
    const {task_name,task_details,task_deadline_date,task_deadline_time,task_priority,task_status} = task
  return (
    <div className={task_status === "Ongoing" ? "card bg-yellow-200  shadow-xl image-full" : "card bg-lime-200  shadow-xl image-full"}>
      
      <div className="card-body">
        <h2 className="card-title">{task_name}</h2>
        <p>{task_details}</p>
        <p>Deadline Date: <span className="font-bold">{task_deadline_date}</span></p>
        <p>Deadline Time: <span className="font-bold">{task_deadline_time}</span></p>
        <p>Task Priority: <span className="font-bold">{task_priority}</span></p>
        <p>Task Status: <span className="font-bold">{task_status}</span></p>
        {/* <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div> */}
      </div>
    </div>
  );
};

export default TaskCard;
