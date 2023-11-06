import React from "react";

interface TaskCardProps {
  name: string;
  description: string;
}

const TaskCard: React.FC<TaskCardProps> = ({ name, description }) => {
  return (
    <div className="bg-white p-3 rounded-md border border-black shadow-md mb-2">
      <h3 className="text-lg text-black font-semibold">{name}</h3>
      <p className="text-gray-600">{description}</p>
      {/* Add more task details and actions as needed */}
    </div>
  );
};

export default TaskCard;
