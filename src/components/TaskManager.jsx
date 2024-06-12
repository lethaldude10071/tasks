import { useState, useEffect } from "react";
//import {Route, Routes } from "react-router-dom";
import TaskForm from "./TaskForm";
import TaskListBoardView from "./TaskListBoardView";
import TaskListListView from "./TaskListListView";
//import TodoPages from "./TodoPage";
//import InProgressPage from "./InProgressPage";
//import CompletedPage from "./CompletedPage";

const TaskManager = ({ addTask }) => {
  const [showForm, setShowForm] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [isListView, setIsListView] = useState(true); // Initially set to list view
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768); // Set to true for screen widths less than 768px
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize); // Listen for resize events

    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup
    };
  }, []);

  const handleAddTask = (task) => {
    setTasks([...tasks, task]);
  };

  const toggleView = () => {
    setIsListView((prev) => !prev);
  };

  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center mt-8">
        <h1 className="text-2xl font-bold text-blue-900 px-2">
          Task Manager
        </h1>
        <button
          onClick={() => setShowForm(true)}
          className="bg-blue-700 text-white p-4 rounded-md m-2"
        >
          + Add Task
        </button>
        {!isSmallScreen && ( // Conditionally render toggle button only for large screens
          <button
            onClick={toggleView}
            className="bg-blue-700 text-white p-4 rounded-md m-2 w-32" // Fixed width for toggle button
          >
            {isListView ? "Board View" : "List View"}
          </button>
        )}
      </div>
      {showForm && (
        <TaskForm addTask={handleAddTask} setShowForm={setShowForm} />
      )}
      <div className="mt-8">
        {isListView || isSmallScreen ? (
          <TaskListListView tasks={tasks} />
        ) : (
          <TaskListBoardView tasks={tasks} />
        )}
        {/*<Routes>
          <Route path="/todo" element={<TodoPages/>} />
          <Route path="/in-progress" element={<InProgressPage/>} />
          <Route path="/completed" element={<CompletedPage/>} />
        </Routes>*/}
      
      </div>
    </div>
  );
};

export default TaskManager;




