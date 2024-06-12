// TaskCard.jsx
const TaskCard = ({ task }) => {
  return (
    <div className="bg-white rounded-lg  shadow-md hover:shadow-lg  p-4">
      <h3 className="text-lg font-semibold text-blue-800 mb-2">
        {task.title}
      </h3>
      <p className="text-gray-700 mb-2">{task.description}</p>
      <p className="text-gray-700 mb-2">Due Date: {task.dueDate}</p>
      <p className="text-gray-700">Status: {task.status}</p>
    </div>
  );
};

export default TaskCard;



/*import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import "./TaskCard.css";

const TaskCard = ({ task }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const cardElement = cardRef.current;
    if (isFlipped) {
      gsap.to(cardElement, { rotationY: 180, duration: 0.6 });
    } else {
      gsap.to(cardElement, { rotationY: 0, duration: 0.6 });
    }
  }, [isFlipped]);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
      <div
        ref={cardRef}
        className="task-card bg-white rounded-lg shadow-md hover:shadow-lg p-4 cursor-pointer"
        onClick={handleFlip}
      >
        <div className="task-card-inner">
          <div className="task-card-front absolute w-full h-full backface-hidden p-4">
            <h3 className="text-lg font-semibold text-blue-800 mb-2">
              {task.title}
            </h3>
            <p className="text-gray-700 mb-2">Due Date: {task.dueDate}</p>
            <p className="text-gray-700">Status: {task.status}</p>
          </div>
          <div className="task-card-back absolute w-full h-full backface-hidden transform rotateY-180 p-4">
            <p className="text-gray-700">{task.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;*/

