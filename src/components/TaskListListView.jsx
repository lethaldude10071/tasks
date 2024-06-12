// TaskListListView.jsx
import TaskListItem from "./TaskListItems";

const TaskListListView = ({ tasks }) => {
  return (
    <div className="mt-8 hover:text-gray-500">
      {tasks.map((task, index) => (
        <TaskListItem key={index} task={task} />
      ))}
    </div>
  );
};

export default TaskListListView;
