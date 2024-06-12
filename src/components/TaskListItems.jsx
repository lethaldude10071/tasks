// TaskListItems.jsx

const TaskListItem = ({ task }) => {
  if (!task) return null; // Add null check here

 // console.log(task);

  const { title, description, dueDate, status } = task;
  return (
    <div className="bg-white rounded-md shadow-md p-4 mb-4">
      <h3 className="text-lg font-semibold text-blue-800">{title}</h3>
      <p className="text-gray-700 mb-2">{description}</p>
      <p className="text-sm text-gray-500">Due Date: {dueDate}</p>
      <p className="text-sm text-gray-500">Status: {status}</p>
    </div>
  );
};

export default TaskListItem;
