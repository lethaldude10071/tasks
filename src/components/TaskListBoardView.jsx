/*import TaskCard from "./TaskCard";

const TaskListBoardView = ({ tasks }) => {
  return (
    <div className="grid grid-cols-3 gap-4 mt-8">
      {tasks.map((task, index) => (
        <TaskCard key={index} task={task} />
      ))}
    </div>
  );
};

export default TaskListBoardView;*/



import TaskCard from "./TaskCard";

const TaskListBoardView = ({ tasks }) => {
  return (
    <div className="flex flex-wrap justify-center mt-8">
      {tasks.map((task, index) => (
        <TaskCard key={index} task={task} />
      ))}
    </div>
  );
};

export default TaskListBoardView;

