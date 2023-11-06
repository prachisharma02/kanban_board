import React from "react";
import TaskCard from "./taskcard";

const KanbanBoard: React.FC = () => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-black mb-4">Project A</h2>
      <div className="flex space-x-4">
        <div className="w-1/3">
          <h3 className="text-lg text-black font-medium">To-Do</h3>
          <TaskCard name="Task 1" description="Description for Task 1" />
          <TaskCard name="Task 2" description="Description for Task 2" />
        </div>
        <div className="w-1/3">
          <h3 className="text-lg font-medium text-black">In Progress</h3>
          <TaskCard name="Task 3" description="Description for Task 3" />
        </div>
        <div className="w-1/3">
          <h3 className="text-lg font-medium text-black">Done</h3>
          <TaskCard name="Task 4" description="Description for Task 4" />
          <TaskCard name="Task 5" description="Description for Task 5" />
        </div>
      </div>
    </div>
  );
};

export default KanbanBoard;
