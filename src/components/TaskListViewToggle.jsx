import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import TaskListBoardView from "./TaskListBoardView";
import TaskListListView from "./TaskListListView";

const TaskListViewToggle = ({ tasks, isListView, toggleView }) => {
  const listViewRef = useRef(null);
  const boardViewRef = useRef(null);

  useEffect(() => {
    const listViewElement = listViewRef.current;
    const boardViewElement = boardViewRef.current;

    if (isListView) {
      gsap.to(boardViewElement, { autoAlpha: 0, duration: 0.3 });
      gsap.to(listViewElement, { autoAlpha: 1, duration: 0.3 });
    } else {
      gsap.to(listViewElement, { autoAlpha: 0, duration: 0.3 });
      gsap.to(boardViewElement, { autoAlpha: 1, duration: 0.3 });
    }
  }, [isListView]);

  return (
    <div>
      <div className="flex justify-end mb-4">
        <button
          onClick={toggleView}
          className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-md"
        >
          {isListView ? "Switch to Board View" : "Switch to List View"}
        </button>
      </div>
      <div ref={listViewRef}>
        <TaskListListView tasks={tasks} />
      </div>
      <div ref={boardViewRef} style={{ display: "none" }}>
        <TaskListBoardView tasks={tasks} />
      </div>
    </div>
  );
};

export default TaskListViewToggle;
